class Stor{

addFile(uid,file){
    //Crea una referecia donde se van a guardar los archivos
    const storageRef = firebase.storage().ref(`images/${uid}/${file.name}`)
    //Guarda el archivo
    storageRef.put(file).then(() => {
        console.log('Archivo subido')
    })
    .catch(error => {
        console.error(error)
    })
}

deleteFile(uid,file){}


}