import { insertFavorito, selectFavorito } from "../../db"
import { deleteFavoritoFromFirebaseById, getDataFromFirebaseById, postDataToFirebase } from "../../db/FirebaseQuerys"

export const FAVORITOS_AGREGAR = 'FAVORITOS_AGREGAR'

export const favoritos_agregar = (idUser, libro) => {
    try {
                
        return async (dispatch) => {
            const result = await postDataToFirebase('favoritos', {
                idUser: idUser,
                ...libro
            })
            // console.log('favoritos_agregar_action', {idUser: idUser, ...libro})
            dispatch({
                type: FAVORITOS_AGREGAR,
                payload: {
                    ...libro
                }
            })
        }
    } catch (err) {
        console.log(err.message)
    }
}

export const FAVORITOS_ELIMINAR = 'FAVORITOS_ELIMINAR'

// export const favoritos_eliminar = (id) => ({
//     type: FAVORITOS_ELIMINAR,
//     id: id
// })

export const favoritos_eliminar = (idFavorito) => {
    try {
        return async (dispatch) => {
            const result = await deleteFavoritoFromFirebaseById(idFavorito)
            console.log('favoritos_eliminar', result)
            dispatch ({
                type: FAVORITOS_ELIMINAR,
                payload: {
                    id: idFavorito
                }
            })
        }
    } catch (err) {
        console.log(err.message)
    }
}

export const FAVORITOS_LOAD = 'FAVORITOS_LOAD'

export const favoritos_load = (idUser) => {
    try {
        
        return async (dispatch) => {
            const result = await getDataFromFirebaseById('favoritos', idUser)
            console.log('favoritos_load', result)
            dispatch({
                type: FAVORITOS_LOAD,
                payload: {
                    libros: !result? [] : result
                }
            })
        }
    } catch(e) {
        console.log(e.message)
    }
}

