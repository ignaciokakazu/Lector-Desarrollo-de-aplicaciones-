import { insertFavorito } from "../../db"

export const FAVORITOS_AGREGAR = 'FAVORITOS_AGREGAR'

// export const favoritos_agregar = (id, titulo, autor) => ({
//     type: FAVORITOS_AGREGAR,
//     id: id,
//     titulo: titulo,
//     autor: autor
// })

export const favoritos_agregar = (id, titulo, autor) => ({
    type: FAVORITOS_AGREGAR,
    payload: {
        id: id,
        autor: autor,
        titulo: titulo
    }
})

// export const favoritos_agregar = (id, titulo, autor) => {
//     try {
//         console.log('favortis agregar')
//     return async (dispatch) => {
//         // const result = await insertFavorito(id, titulo, autor)
//         // console.log(result)
//         dispatch({
//             type: FAVORITOS_AGREGAR,
//             payload: {
//                 id: id,
//                 titulo: titulo,
//                 autor: autor
//             }
//         })
//         }
//     } catch (err) {
//         console.log(err.msg)
//     }
// }

export const FAVORITOS_ELIMINAR = 'FAVORITOS_ELIMINAR'

export const favoritos_eliminar = (id) => ({
    type: FAVORITOS_ELIMINAR,
    id: id
})