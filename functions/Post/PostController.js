const functions = require('firebase-functions')
const admin = require('firebase-admin')




exports.notificationNewPost = snapshot => {
    if (snapshot.name.match(/images\//)) {

    const topic = 'Images'      

        const message = {
            data: {
                titulo: 'New image',
                descripcion: 'we`ve a new image BITCH',  
              },
              topic : topic
        }

        return admin.messaging().send(message)
        .then(() => console.log('New image'))
        .catch( error => console.error(error))
    }
    return null
}


exports.subsToTopic = snapshot => {

    return admin.messaging().subscribeToTopic(snapshot.data().token, 'Images')
    .then(() => console.log('Subscribed to topic'))
    .catch( error => console.error(error))
    
}