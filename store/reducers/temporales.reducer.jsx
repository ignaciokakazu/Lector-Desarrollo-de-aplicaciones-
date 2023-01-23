import { SET_TEMPORALES, FAVORITOS_AGREGAR_TEMPORALES, GET_TEMPORALES } from "../actions/temporales.actions";

const initialState = {
    libros: []
}

const temporalesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TEMPORALES:
            console.log('set-temporales-reducer', action.payload.libros)
            return {libros: action.payload.libros}
        case FAVORITOS_AGREGAR_TEMPORALES:
            const libros = state.libros.filter((libro)=> libro.id != action.payload.id)
            libros.push({
                id: action.payload.id,
                titulo: action.payload.titulo,
                autor: action.payload.autor,
                favorito: true
            })
            return libros
        case GET_TEMPORALES: 
        // console.log('get_temporales_reducer', action.payload.libros)
            return {libros: action.payload.libros}
        default: 
            return state
    }
}

export default temporalesReducer;