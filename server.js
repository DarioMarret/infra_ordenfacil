const cron = require('node-cron');
const express = require('express');
const { exec } = require('child_process');
const axios = require('axios');

const app = express();

const cors = require('cors');
const morgan = require('morgan');


app.use(cors());
app.use(morgan('dev'));


app.use(express.json());


app.post('/repo_deploy', (req, res) => {
    console.log(req.body);
    const { repo_url, branch } = req.body;
    console.log('repo_url', repo_url);
    console.log('branch', branch);
    exec(`git pull origin ${branch}`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        console.log(stdout);
        console.log('Deploying...');
        exec('docker-compose up -d', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            console.log(stdout);
            console.log('Deployed successfully');
            return res.status(200).send('OK');
        })
    })
    res.status(200).send('OK');
})

app.listen(5100, () => {
    console.log('Server listening on port 5100');
})