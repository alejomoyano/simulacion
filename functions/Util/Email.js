const nodemailer = require('nodemailer')

class Email{

    sendEmail(){
        let transporter = nodemailer.createTransport({
            host: "gmail",
            auth: {
              user: 'alejomoyano1808@gmail.com', 
              pass: 'colo081297' 
            }
          });
          const message = {
            from: 'alejomoyano1808@gmail.com',
            to: 'alejomoyano16@gmail.com',
            subject: 'Login',
            text: 'Hola'
          }

          transporter.sendMail(message, (error, resolve) => {
              if(error){
                  console.error(error)
              }
              else{
                  console.log('Email sent')
              }
          })
    }
}

exports.Email = Email