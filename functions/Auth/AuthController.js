const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
//const email = functions.config().gmail.login
//const pass = functions.config().gmail.pass

exports.sendWelcomeEmail = usuario => {

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',

        auth: {
          user: 'alejomoyano16@gmail.com',
          pass: 'colo081297'
        }

    })
        const options = {
            from: 'alejomoyano16@gmail.com',
            to: 'alejomoyano1808@gmail.com',
          }
      
        return transport.sendMail(options)
}