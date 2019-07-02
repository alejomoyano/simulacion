const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const email = functions.config().gmail.login
const pass = functions.config().gmail.pass

exports.sendWelcomeEmail = usuario => {
    console.log(usuario)
    //const emailUsuario = usuario.email
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        tls: { rejectUnauthorized: false },
        auth:{
            user: email, pass: pass
        }
    })

    var message = {
        from: 'alejomoyano16@gmail.com',
        to: 'alejomoyano1808@gmail.com',
        subject: 'Login',
        text: 'Hola',
        html: '<p>Hola</p>'
    }

    return transporter.sendMail(message)
}