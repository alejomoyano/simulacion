class Auth{

createUserWithEmail(email,password){
    console.log(`Signin with ${email}`)
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(result => {
       result.user.sendEmailVerification().catch(error => {console.error(error)})
       firebase.auth().signOut()
       console.log('User created')
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
            console.log("Correct login, email verified")
            
        }
        //Si no la verifico hace signout
        else{
            firebase.auth().signOut()
            console.log("Not verified")
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
        console.log("Logged with Google")
    })
    .catch(error => {
        console.error(error)
    })
}

}
