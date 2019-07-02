
class Base{
    
    addAPerson(name, lastname, age){
        // Creo la coleccion y le agrego un documento
        firebase.firestore().collection('Person').add({
            name : name,
            lastname : lastname,
            age : age
        })
        .then( resultado => console.log(`Person correctly added, ${resultado}`))
        .catch(error => console.error(error))
    }

    getPersonByName(name){
        //Entramos a la coleccion
        firebase.firestore().collection('Person').get()
            .then( document => {
                //Hace un forEach de los documentos
                document.forEach( person =>{
                //Compara el nombre  
                if(person.data().name == name){
                    console.log(person.data())
                }
            })
        
        })
        .catch( error => console.log(error))
    }

    deletePersonByName(name){
        firebase.firestore().collection('Person').get()
            .then( document => {
                document.forEach( person =>{
                if(person.data().name == name){
                    console.log(person.data())
                    firebase.firestore().collection('Person').doc(person.id).delete()
                    .then(() => console.log('Persona eliminada'))
                    .catch( error => console.error(error))
                    
                }
            })
        
        })
    }
}