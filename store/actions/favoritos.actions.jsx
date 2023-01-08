import { insertFavorito, selectFavorito } from "../../db"

export const FAVORITOS_AGREGAR = 'FAVORITOS_AGREGAR'

// export const favoritos_agregar = (id, titulo, autor) => ({
//     type: FAVORITOS_AGREGAR,
//     id: id,
//     titulo: titulo,
//     autor: autor
// })

// export const favoritos_agregar = (id, titulo, autor) => ({
//     type: FAVORITOS_AGREGAR,
//     payload: {
//         id: id,
//         autor: autor,
//         titulo: titulo
//     }
// })

export const favoritos_agregar = (id, titulo, autor) => {
    try {
        console.log('favortis agregar')
        
        return async (dispatch) => {
            const result = await insertFavorito(id, titulo, autor)
            console.log('lo creo')
            console.log(result)
            dispatch({
                type: FAVORITOS_AGREGAR,
                payload: {
                    id: id,
                    titulo: titulo,
                    autor: autor
                }
            })
        }
    } catch (err) {
        console.log(err.message)
    }
}

export const FAVORITOS_ELIMINAR = 'FAVORITOS_ELIMINAR'

export const favoritos_eliminar = (id) => ({
    type: FAVORITOS_ELIMINAR,
    id: id
})

export const FAVORITOS_LOAD = 'FAVORITOS_LOAD'

export const favoritos_load = () => {
    try {
        console.log('favoritos_load')
        return async (dispatch) => {
            const result = await selectFavorito()
            console.log('r', result)
            dispatch({
                type: FAVORITOS_LOAD,
                payload: {
                    libros: result
                }
            })
        }
    } catch(e) {
        console.log(e.message)
    }
}