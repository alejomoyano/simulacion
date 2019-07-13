
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

    async deletePersonByName(name){
        const document = await firebase.firestore().collection('Person').get()
        document.forEach( person => {
            if(person.data().name == name){
                console.log(person.data())
                firebase.firestore().collection('Person').doc(person.id).delete()
                .then(() => console.log('Persona eliminada'))
                .catch( error => console.error(error))
            }
        })
        //     .then( document => {
        //         //forEach to see each document 
        //         document.forEach( person =>{
        //         if(person.data().name == name){
        //             console.log(person.data())
        //             firebase.firestore().collection('Person').doc(person.id).delete()
        //             .then(() => console.log('Persona eliminada'))
        //             .catch( error => console.error(error))
                    
        //         }
        //     })
        
        // })
    }

    getAndUpdateAPerson(name, nameUpdate, lastnameUpdate, ageUpdate){
        firebase.firestore().collection('Person').get()
        .then( document => { 
            document.forEach( person =>{
                if(person.data().name == name){
                console.log(person.data())
                firebase.firestore().collection('Person').doc(person.id).set({
                    name: nameUpdate,
                    lastname : lastnameUpdate,
                    age : ageUpdate
                })
                .then(() => console.log('Update correct'))
                .catch( error => console.error(error))
                
                }
                else{
                    console.log(`${name} doesnt exist` )
                }
            })
        })
    }

}