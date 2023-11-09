const cron = require("node-cron");
const user = require("./models/user");

// cron.schedule('*/5 * * * *', async () => {
//   const result = await  user.findAll();
//   console.log(result);
// });

const nodemailer = require('nodemailer');

// let mailTransporter = nodemailer.createTransport({
//     service : 'gmail' ,
//     auth : {
//         user : 'abhijeetTEST40@gmail.com',
//         pass : 'jolq kmea olia ovwe'
//     }
// })

// let details = {
//     from : 'abhijeetTEST40@gmail.com',
//     to : 'abhijeet.k@binmile.com',
//     subject : " HAPPY WOMANS DAY ",
//     text : ''
// }

// mailTransporter.sendMail(details, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('email send successfully');
//     }
// })

const senMailOnWomansDay = async (emailObj) => {
    const mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure :false,
        requireTLS : true,
        auth : {
            user : "abhijeetTEST40@gmail.com",
            pass : "jolq kmea olia ovwe",
        }

    })

    let mailDetails = {
        from : 'abhijeetTEST40@gmail.com',
        to : emailObj,
        subject : 'Happy Womans Day',
        text : "congratulation on being a woman "
    }

    mailTransporter.sendMail(mailDetails , (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('mail has been sent')
        }
    });
}


const sendMailToAllFemaleUsers = () => {
    
  try {
    cron.schedule('* * * * * *', async () => {
      const userData = await user.findAll({
        where: {
          gender: "Female",
        },
      });
      if(userData.length > 0) {

        const emails = [];
        userData.map((key) => {
            emails.push(key.email)
        });
        senMailOnWomansDay(emails);
        console.log(emails);
      }
    });
  } catch (err) {
    console.error(err);
  }
};

sendMailToAllFemaleUsers();
