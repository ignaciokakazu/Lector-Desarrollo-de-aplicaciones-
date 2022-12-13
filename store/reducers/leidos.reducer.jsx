const initialState = {
    libros: [{
        id: 2,
        titulo: 'Leido 2',
        autor: 'Autor 2'
    },{
        id: 3,
        titulo: 'Leido 3',
        autor: 'Autor 3'
    }]
}

const leidosReducer = (state = initialState, action) => {
    return state
}

export default leidosReducer;