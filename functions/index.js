const functions = require('firebase-functions')
const admin = require('firebase-admin')
const authController = require('./Auth/AuthController.js')

admin.initializeApp()


//Se activa cuando se crea un usuario nuevo
exports.welcomeEmail = functions.auth.user().onCreate(authController.sendWelcomeEmail)