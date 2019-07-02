class Auth{

createUserWithEmail(email,password){
    console.log(`Logueando con ${email}`)
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(result => {
       result.user.sendEmailVerification().catch(error => {console.error(error)})
       firebase.auth().signOut()
       console.log('Usuario creado')
    })
    .catch(error => {
        console.error(error)
    })
}

logInWithEmail(email,password){
    //Intenta entrar a la cuenta
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then( result => {
        //Verifica que el usuario haya verificado la cuenta
        if(result.user.emailVerified){
            console.log("Login correcto, usuario verificado")
            
        }
        //Si no la verifico hace signout
        else{
            firebase.auth().signOut()
            console.log("No esta verificado")
        }
    })
    .catch(error => {
        console.error(error)
    })
}


authWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
    .then(() => {
        console.log("Logueado con Google")
    })
    .catch(error => {
        console.error(error)
    })
}

}
