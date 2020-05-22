import {Usuario} from './databases'



export function crearUsuario(identificador , datosDeUsuario){
    return new Promise((resolve, reject) => {
        Usuario.setItem(identificador, datosDeUsuario)
        .then(usuarioCreado => {
            resolve(usuarioCreado)
        })
        .catch(error => {
            reject(error)
        })
    })
}


export function obtenerTodosLosUsuarios(){
    return Usuario.keys().then(identificadores => {
        return Promise.all(
            identificadores.map(identificador => {
                return Usuario.getItem(identificador)
            })
        )
    })
}