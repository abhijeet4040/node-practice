const nodemailer = require('nodemailer');

const sendEmail = (_req, res) =>{

    async function createEmail(){

        const transporter = nodemailer.createTransport({
            service : 'Gmail',
            port: 465,
            auth : {
                user: 'chaitanyamailer@gmail.com',
                pass : "lvwi mjcl jauy oyek",
            }
        });
        const info = await transporter.sendMail({
            from : 'chaitanmailer@gmail.com',
            to : 'chaitanmailer@gmail.com',
            subject : 'Hello from nodeMailer',
            text : 'this is a test message',
            html:"<b>binmile</b>"
        })
        console.log("message",info.messageId)
        }
        
        createEmail();

}

module.exports = sendEmail;