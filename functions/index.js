const functions = require('firebase-functions')
const admin = require('firebase-admin')
const authController = require('./Auth/AuthController')
const postController = require('./Post/PostController')
const personController = require('./Persons/PersonsController')

admin.initializeApp()


//Se activa cuando se crea un usuario nuevo
exports.welcomeEmail = functions.auth.user().onCreate(authController.sendWelcomeEmail)

//Notification new image
exports.newImage = functions.storage.object().onFinalize(postController.notificationNewPost)

//Subscribe to topic 
// exports.addToTopic = functions.firestore.document('Tokens/{id}').onCreate(postController.subsToTopic)

//Update a person
exports.updatePerson = functions.firestore.document('Person/{personId}').onUpdate(personController.updatedPerson)

//HTTPS
exports.consoleLog = functions.https.onRequest((data, context) => {
    return console.log(data)
})

exports.subTopic = functions.https.onCall(postController.subToTopic)