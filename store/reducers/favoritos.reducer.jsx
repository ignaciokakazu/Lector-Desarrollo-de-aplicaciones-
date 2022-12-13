import { FAVORITOS_AGREGAR, FAVORITOS_ELIMINAR } from "../actions/favoritos.actions"

const initialState = {
    libros: [{
        id: 0,
        titulo: 'Libro Favorito id 0',
        autor: 'Autor Favorito 0' 
    },
    {
        id: 1,
        titulo: 'Libro Favorito id 1',
        autor: 'Autor Favorito 1' 
    }]
}

const favoritosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITOS_AGREGAR:
            const librosAgregado = state.libros
            librosAgregado.push({id: action.id, titulo: action.titulo, autor: action.autor})
            return  {libros: librosAgregado}
            
        case FAVORITOS_ELIMINAR:
            const filtered = state.libros.filter((libro)=>libro.id != action.id)
            return  {libros: filtered}

        default: 
            return state
    }
}

export default favoritosReducer;