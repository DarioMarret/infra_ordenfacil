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
    // automation.xfiv.chat  autoservicio.xtrim.com.ec  ecdf.xtrim.tv  ecommerce-web.intelnexo.com  gestion-autoservicio-xtrim.intelnexo.com.ec  link.xfiv.chat
    // rm -rf /etc/nginx/sites-available/automation.xfiv.chat /etc/nginx/sites-enabled/automation.xfiv.chat
    // rm -rf /etc/nginx/sites-available/autoservicio.xtrim.com.ec /etc/nginx/sites-enabled/autoservicio.xtrim.com.ec
    // rm -rf /etc/nginx/sites-available/ecdf.xtrim.tv /etc/nginx/sites-enabled/ecdf.xtrim.tv
    // rm -rf /etc/nginx/sites-available/ecommerce-web.intelnexo.com /etc/nginx/sites-enabled/ecommerce-web.intelnexo.com
    // rm -rf /etc/nginx/sites-available/gestion-autoservicio-xtrim.intelnexo.com.ec /etc/nginx/sites-enabled/gestion-autoservicio-xtrim.intelnexo.com.ec
    // rm -rf /etc/nginx/sites-available/link.xfiv.chat /etc/nginx/sites-enabled/link.xfiv.chat
    // rm -rf /etc/nginx/sites-available/automation.xfiv.chat /etc/nginx/sites-enabled/automation.xfiv.chat
    // core.xfiv.chat  gateway.xfiv.chat

    //dbaff387c0e6   xtrim_xtrim-back-appmovil-prod_1
    //a93e83ce2bfe         xtrim_xtrim-back-appmovil_1


    //xfiv_exchangeMessages_1       0.0.0.0:8093->8093/tcp, :::8093->8093/tcp                                                                                      474kB (virtual 1.37GB)    Up 7 hours (healthy)
    //xfiv_exchangeMessages2_1      0.0.0.0:8094->8093/tcp, :::8094->8093/tcp                                                                                      11.3MB (virtual 1.38GB)   Up 7 hours (unhealthy)
    //xfiv_whatsapp_365_1           0.0.0.0:4214->3000/tcp, :::4214->3000/tcp                                                                                      694kB (virtual 2.06GB)    Up 7 hours (healthy)
    //xfiv_gpt_1                    0.0.0.0:4211->3002/tcp, :::4211->3002/tcp                                                                                      258kB (virtual 458MB)     Up 7 hours
    //xfiv_intenciongpt_1           0.0.0.0:4210->3000/tcp, :::4210->3000/tcp                                                                                      45.8MB (virtual 590MB)    Up 7 hours
    //xfiv_consumer_1                                                                                                                                              43.8kB (virtual 192MB)    Up 7 hours
    //xfiv_producerKafka_1          0.0.0.0:8881->8881/tcp, :::8881->8881/tcp                                                                                      120kB (virtual 219MB)     Up 7 hours
    //xfiv_whatsapp_5007_1          0.0.0.0:4206->3000/tcp, :::4206->3000/tcp                                                                                      2.08MB (virtual 2.06GB)   Up 7 hours (healthy)
    //xfiv_whatsapp_3377_1          0.0.0.0:4209->3000/tcp, :::4209->3000/tcp                                                                                      2.08MB (virtual 2.06GB)   Up 7 hours (healthy)
    //xfiv_whatsapp_3058_1          0.0.0.0:4208->3000/tcp, :::4208->3000/tcp                                                                                      2.08MB (virtual 2.06GB)   Up 7 hours (healthy)
    //xfiv_whatsapp_qr_speed_1      0.0.0.0:4212->3000/tcp, :::4212->3000/tcp                                                                                      12.5MB (virtual 2.07GB)   Up 7 hours (unhealthy)
    //xfiv_whatsapp_qr_ticket_1     0.0.0.0:4205->3000/tcp, :::4205->3000/tcp                                                                                      2.08MB (virtual 2.06GB)   Up 7 hours (healthy)
    //xfiv_whatsapp_qr_1            0.0.0.0:4203->3000/tcp, :::4203->3000/tcp                                                                                      2.08MB (virtual 2.06GB)   Up 7 hours
    //xfiv_crontime_1                                                                                                                                              4.92MB (virtual 407MB)    Up 7 hours
    //xfiv_sensor_1                 0.0.0.0:8088->4000/tcp, :::8088->4000/tcp                                                                                      2.22MB (virtual 383MB)    Up 7 hours
    //xfiv_xfivConnector360_1       0.0.0.0:5080->5080/tcp, :::5080->5080/tcp                                                                                      3.21MB (virtual 249MB)    Up 7 hours
    //xfiv_gupshup_1                0.0.0.0:8098->3000/tcp, :::8098->3000/tcp                                                                                      4.37MB (virtual 271MB)    Up 7 hours
    //xfiv_whatsappCloudApi_1       0.0.0.0:3030->5050/tcp, :::3030->5050/tcp                                                                                      3.34MB (virtual 260MB)    Up 7 hours
    //xfiv_accessconfig_1           0.0.0.0:3003->3002/tcp, :::3003->3002/tcp                                                                                      194kB (virtual 279MB)     Up 7 hours
    //xfiv_ocr_1                    0.0.0.0:1221->1221/tcp, :::1221->1221/tcp                                                                                      2.77MB (virtual 545MB)    Up 7 hours
    //xfiv_proxy_1                  0.0.0.0:1015->80/tcp, :::1015->80/tcp                                                                                          2B (virtual 17.7MB)       Up 7 hours
    //xfiv_s3_Upload_1              0.0.0.0:4030->3030/tcp, :::4030->3030/tcp                                                                                      57MB (virtual 394MB)      Up 7 hours
    //xfiv_facebook_messager_1      0.0.0.0:8097->5080/tcp, :::8097->5080/tcp                                                                                      7.35MB (virtual 270MB)    Up 7 hours
    //xfiv_incoming_1               0.0.0.0:3005->3005/tcp, :::3005->3005/tcp                                                                                      161kB (virtual 246MB)     Up 7 hours
    //xfiv_mysql_1                  33060/tcp, 0.0.0.0:3360->3306/tcp, :::3360->3306/tcp                                                                           4B (virtual 581MB)        Up 7 hours
    //xfiv_worldnet_1               0.0.0.0:3006->3003/tcp, :::3006->3003/tcp                                                                                      6.21MB (virtual 708MB)    Up 7 hours
    //xfiv_botinternet_1            0.0.0.0:1223->1223/tcp, :::1223->1223/tcp                                                                                      5.13MB (virtual 466MB)    Up 7 hours
    //rabbitmqcluster_rabbitmq3_1   4369/tcp, 9100-9104/tcp, 15672/tcp, 25672/tcp, 0.0.0.0:5674->5672/tcp, :::5674->5672/tcp                                       5.49MB (virtual 251MB)    Up 7 hours
    //rabbitmqcluster_rabbitmq2_1   4369/tcp, 9100-9104/tcp, 25672/tcp, 0.0.0.0:5673->5672/tcp, :::5673->5672/tcp, 0.0.0.0:15673->15672/tcp, :::15673->15672/tcp   11.4MB (virtual 257MB)    Up 7 hours
    //rabbitmqcluster_rabbitmq1_1   4369/tcp, 9100-9104/tcp, 25672/tcp, 0.0.0.0:5671->5672/tcp, :::5671->5672/tcp, 0.0.0.0:15671->15672/tcp, :::15671->15672/tcp   466MB (virtual 711MB)     Up 7 hours
    //xfiv_redis_1                  0.0.0.0:6379->6379/tcp, :::6379->6379/tcp                                                                                      0B (virtual 138MB)        Up 7 hours
    //xfiv_xfiv-core-prod-email_1   0.0.0.0:5001->5001/tcp, :::5001->5001/tcp                                                                                      6.56MB (virtual 407MB)    Up 7 hours
    //xfiv_zonahoraria_1            0.0.0.0:4202->3000/tcp, :::4202->3000/tcp                                                                                      91.8MB (virtual 371MB)    Up 7 hours

//const command = 'docker ps -aq | xargs docker rm -f';
//xfiv-core-stack-deploy-prod/xfiv

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
