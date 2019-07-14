const functions = require('firebase-functions')
const admin = require('firebase-admin')




exports.notificationNewPost = snapshot => {
    //Filter
    if (snapshot.name.match(/images\//)) {

    const topic = 'Images'      

        const message = {
            data: {
                title: 'New image',
                description: 'New image BITCH',  
              },
              topic : topic
        }

        return admin.messaging().send(message)
        .then(() => console.log('New image'))
        .catch( error => console.error(error))
    }
    return null
}

//Subscribe to a topic when the user provides the permission to send messages
exports.subsToTopic = snapshot => {

    //Param => token and topic
    return admin.messaging().subscribeToTopic(snapshot.data().token, 'Images')
    .then(() => console.log('Subscribed to topic'))
    .catch( error => console.error(error))
    
}


exports.subToTopic = (data,context) => {
    return admin.messaging().subscribeToTopic(data.token, 'Images')
    .then(() => console.log('Subscribed to topic'))
    .catch( error => console.error(error))
}