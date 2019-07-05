const functions = require('firebase-functions')
const admin = require('firebase-admin')
const authController = require('./Auth/AuthController')
const postController = require('./Post/PostController')

admin.initializeApp()


//Se activa cuando se crea un usuario nuevo
exports.welcomeEmail = functions.auth.user().onCreate(authController.sendWelcomeEmail)


exports.newImage = functions.storage.object().onFinalize(postController.notificationNewPost)


exports.addToTopic = functions.firestore.document('Tokens/{id}').onCreate(postController.subsToTopic)