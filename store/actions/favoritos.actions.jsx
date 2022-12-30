import { insertFavorito } from "../../db"

export const FAVORITOS_AGREGAR = 'FAVORITOS_AGREGAR'

export const favoritos_agregar = (id, titulo, autor) => ({
    type: FAVORITOS_AGREGAR,
    id: id,
    titulo: titulo,
    autor: autor
})

// export const favoritos_agregar = async (id, titulo, autor) => {
//     const result = await insertFavorito(id, titulo, autor)
//     console.log(result)
// }

export const FAVORITOS_ELIMINAR = 'FAVORITOS_ELIMINAR'

export const favoritos_eliminar = (id) => ({
    type: FAVORITOS_ELIMINAR,
    id: id
})