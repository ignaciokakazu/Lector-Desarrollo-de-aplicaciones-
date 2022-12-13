const initialState = {
    libros: [{
        id: 0,
        titulo: 'Libro reciente 0',
        autor: 'Autor reciente 0'
    },
    {
        id: 1,
        titulo: 'Libro reciente 1',
        autor: 'Autor reciente 1' 
    }]
}

const recientesReducer = (state = initialState, action) => {
    return state
}

export default recientesReducer;