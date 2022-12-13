export const FAVORITOS_AGREGAR = 'FAVORITOS_AGREGAR'

export const favoritos_agregar = (id, titulo, autor) => ({
    type: FAVORITOS_AGREGAR,
    id: id,
    titulo: titulo,
    autor: autor
})

export const FAVORITOS_ELIMINAR = 'FAVORITOS_ELIMINAR'

export const favoritos_eliminar = (id) => ({
    type: FAVORITOS_ELIMINAR,
    id: id
})