
$(() => {

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged( user => {
    if(user){
        console.log('Ya hay alguien logeado')
        $('#btnLogin').val('Log Out')
    }
    else{
        $('#btnLogin').val('Log In')
    }
})

$('#btnRegist').click(() =>  {
    const email = $('#logEmail').val();
    const password = $('#logPass').val();
    const auth = new Auth()
    auth.createUserWithEmail(email,password)
})

$('#btnGoogle').click(() => {
    const authGoogle = new Auth()
    authGoogle.authWithGoogle()
})

$('#btnImg').on('change', stor => {
    console.log(stor)
    //Obtiene la imagen
    const file = stor.target.files[0]
    const storage = new Stor()
    const user = firebase.auth().currentUser
    storage.addFile(user.uid,file)
})

$('#btnLogin').click(() =>  {
    const email = $('#logEmail').val();
    const password = $('#logPass').val();
    const auth = new Auth()
    const user = firebase.auth().currentUser
    if(user){
        firebase.auth().signOut()
        .then(() => {
            console.log("SignOut correcto")
            
        })
        .catch( error => console.error(error))
    }
    else{
        auth.logInWithEmail(email,password)
   }
    
})

$('#btnStore').click(() => {
    const name = $('#name').val()
    const lastname = $('#lastname').val()
    const age = $('#age').val()
    const person = new Base()
    firebase.auth().onAuthStateChanged( user => {
        if(user.emailVerified){
            person.addAPerson(name,lastname,age)
        }
        else    
            console.log('User not verified')
    })
})

$('#btnGetPerson').click(() => {
    const person = new Base()
    const name = $('#namePerson').val()
    const user = firebase.auth().currentUser
    if(user){
        person.getPersonByName(name)
    }
    else{
        console.log('U must be logged')
    }
})

$('#btnDeletePerson').click(() => {
    const person = new Base()
    const name = $('#namePerson').val()
    const user = firebase.auth().currentUser
    if(user){
        person.deletePersonByName(name)
    }
    else{
        console.log('U must be logged')
    }
})

$('#btnMakeTheUpdate').click(() => {
    const person = new Base()
    const name = $('#name1').val()
    const nameUpdate = $('#nameUpdate').val()
    const lastnameUpdate = $('#lastnameUpdate').val()
    const ageUpdate = $('#ageUpdate').val()
    const user = firebase.auth().currentUser
    if(user){
        person.getAndUpdateAPerson(name, nameUpdate, lastnameUpdate,ageUpdate)
    }
    else{
        console.log('U must be logged')
    }
})

$('#btnHTTPS').click(() => {
    fetch('https://us-central1-simulacion-de938.cloudfunctions.net/consoleLog')
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from 'response.json()'
    })
    .catch(error => console.error(error))
})


//MESSAGING SHIT

const messaging = firebase.messaging()

//Ask permission to send notifications
messaging.requestPermission()
.then(() => {
    console.log('Notification permission granted.')
    //Get and return the token, move it to the server
    return messaging.getToken()
    .then(token => {
        //Search the token in firebase
        firebase.firestore().collection('Tokens').get()
        .then( collection => {
            collection.forEach( doc => {
                //If the token already exist..
                if(token === doc.data().token){
                    console.log('Token already added')
                }
                //If the token isnt in firestore
                else{
                    firebase.firestore().collection('Tokens').add({token: token})
                    .then(() => console.log('Token correctly added'))
                    .catch(error => console.error(error))
                }
            })
        })
    })
    .catch(error => console.error(error))

  }).catch(function(error) {
    console.log('Unable to get permission to notify.', error)
  });

  //Send a notification when the page is opened
  messaging.onMessage( payload => {
    console.log(payload)
  })
})