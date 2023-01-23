import { getDataFromFirebase } from "../../db/FirebaseQuerys"

export const SET_TEMPORALES = 'SET_TEMPORALES'

// temporales es el estado que junta el listado que corresponde con favorito y true o false
export const set_temporales = (libros) =>({
    type: SET_TEMPORALES,
    payload: {
        libros: libros
    }
    /*
        {
            id: ,
            libro: ,
            autor: ,
            favorito: true o false,
            reciente: true o false,
            leido: true o false
        }
    */
})

// export const set_temporales = (libros) => {
//     console.log('set_temporales_actions', libros)
//     return (dispatch) => {
//         dispatch({
//         type: SET_TEMPORALES,
//         payload: {
//             libros: libros
//             }
//         })
//     }
// }
export const FAVORITOS_AGREGAR_TEMPORALES = 'FAVORITOS_AGREGAR_TEMPORALES'

export const favoritos_agregar_temporales = (id, titulo, autor) => ({
    type: FAVORITOS_AGREGAR_TEMPORALES,
    payload: {
        id: id,
        titulo: titulo,
        autor: autor
    }
})

export const GET_TEMPORALES = 'GET_TEMPORALES'

export const get_temporales = () => {
    try {
        
        return async (dispatch) => {
            const result = await getDataFromFirebase('books')
            console.log('get_temporales_action', result)
            dispatch({
                type: GET_TEMPORALES,
                payload: {libros: result}
            })
        }
    } catch(e) {
        console.log(e.message)
    }
}