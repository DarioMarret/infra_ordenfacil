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


app.post('/api_docker/list', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(5100, () => {
    console.log('Server listening on port 5100');
})

cron.schedule('*/5 * * * * *', async() => {
    console.log('running a task every 5 seconds');
    try {
        const { data, status } = await axios.get('http://localhost:4204/hatchet');
        if(status == 200) {
            console.log(data);
        }else{
            // restart docker container api_facturacion
            exec('docker restart api_facturacion', (err, stdout, stderr) => {
                if (err) {
                    // node couldn't execute the command
                    console.log(err);
                    return;
                }
                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            });
        }
    } catch (error) {
        console.log(error);
    }
});