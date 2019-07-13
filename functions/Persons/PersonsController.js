


exports.updatedPerson = (change, context) => {
    //Change is the changes if the person 
    const after = change.after.data()
    const before = change.before.data()

    if(after.name !== before.name && after.lastname !== before.lastname && after.age !== before.age){
        return console.log(`Name changed to ${after.name}, Age changed to ${after.age}, Lastname changed to ${after.lastname}`)
    }
    
    return console.log('There are no changes made')
    

}