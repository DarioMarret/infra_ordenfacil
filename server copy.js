const express = require('express');
const { exec } = require('child_process');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
//34.196.57.166:5100
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.post('/restart', (req, res) => {
    exec('systemctl restart nginx', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log(err);
            return;
        }
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        res.json({ message: 'ok' });
    });
})
app.post('/comand', (req, res) => {
    console.log(req.body);
    // comando para eliminad un archivo

    exec(req.body.comand, (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        res.json({ message: 'ok' });
    });
})

app.listen(5100, () => {
    console.log('Server listening on port 5100');
})
