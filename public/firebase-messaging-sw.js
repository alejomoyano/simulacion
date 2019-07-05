importScripts('https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js')


firebase.initializeApp({
    projectId: 'simulacion-de938',
    messagingSenderId: '108723050641'
})

const messaging = firebase.messaging()

//Send notification in background
messaging.setBackgroundMessageHandler( payload => {
    const title = 'Hola'
    const options = {
        body : payload.data.titulo,
        click_action : 'https://simulacion-de938.firebaseapp.com'
    }
    return self.registration.showNotifications(title,options)
})