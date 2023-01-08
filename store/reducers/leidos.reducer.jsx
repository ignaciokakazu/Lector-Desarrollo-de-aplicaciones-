const initialState = {
    libros: [{
        id: 2,
        titulo: 'Leido 2',
        autor: 'Autor 2'
    },{
        id: 3,
        titulo: 'Leido 3',
        autor: 'Autor 3'
    },
    {
        id: 4,
        titulo: 'Leido 4',
        autor: 'Autor 4'
    },
    {
        id: 5,
        titulo: 'Leido 5',
        autor: 'Autor 5'
    },
    {
        id: 6,
        titulo: 'Leido 6',
        autor: 'Autor 6'
    },
    {
        id: 7,
        titulo: 'Leido 7',
        autor: 'Autor 7'
    },
    {
        id: 8,
        titulo: 'Leido 8',
        autor: 'Autor 8'
    },
]
}

const leidosReducer = (state = initialState, action) => {
    return state
}

export default leidosReducer;