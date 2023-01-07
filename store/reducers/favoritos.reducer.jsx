import { FAVORITOS_AGREGAR, FAVORITOS_ELIMINAR } from "../actions/favoritos.actions"

// const initialState = {
//     libros: [{
//         id: 0,
//         titulo: 'Libro Favorito id 0',
//         autor: 'Autor Favorito 0' 
//     },
//     {
//         id: 1,
//         titulo: 'Libro Favorito id 1',
//         autor: 'Autor Favorito 1' 
//     }]
// }

const initialState = {
    libros: []
}

const favoritosReducer = (state = initialState, action) => {
    //cómo agregar 
    //https://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux
    switch (action.type) {
        case FAVORITOS_AGREGAR:
            const librosAgregado = state.libros
            librosAgregado.push({id: action.payload.id, titulo: action.payload.titulo, autor: action.payload.autor})
            return  {libros: librosAgregado}
            // return {
            //     ...state,
            //     libros: state.libros.push({
            //         id: action.payload.id,
            //         titulo: action.payload.titulo,
            //         autor: action.payload.autor,
            //     })
            // }
            
        case FAVORITOS_ELIMINAR:
            const filtered = state.libros.filter((libro)=>libro.id != action.id)
            return  {libros: filtered}

        default: 
            return state
    }
}

export default favoritosReducer;