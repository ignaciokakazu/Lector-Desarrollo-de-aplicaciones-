import { URL_API } from '../constants/Database'

export const altaUsuario = async (email, password) => {
    try {
        const response = await fetch(`${URL_API}users.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        }, 
        body: JSON.stringify({
            date: Date.now(),
            user: email,
            password: password, 
            theme: 'Oscuro',
            segmento: 'Gratis'
        })
    })  
        const result = await response.json()

        return result

    } catch (error) {
        console.log(error.message)
    }
}

export const postDataToFirebase = async (tabla='users', body) => {
    try {
        const response = await fetch(`${URL_API}${tabla}.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        }, 
        body: JSON.stringify({
            ...body,
            date: Date.now(),
        })
    })  
        const result = await response.json()

        return result

    } catch (error) {
        console.log(error.message)
    }
}

export const getDataFromFirebase = async (tabla) => {
    try {
    const response = await fetch(`${URL_API}${tabla}.json`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    }) 
    
    const result = await response.json();

    //devuelve un array de objetos
    const array = Object.keys(result).map(key => ({
        ...result[key],
        id: key
    }))
    return array
    
    } catch (e) {
        console.log(e.message)
    }
}


export const getDataFromFirebaseById = async (tabla='users', id) => {
    try {
    const response = await fetch(`${URL_API}${tabla}.json`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    }) 
    
    const result = await response.json();
    //  console.warn('getDataFromFirebaseById', tabla, result)
    //devuelve un array de objetos
    const array = Object.keys(result).map(key => ({
        ...result[key],
        id: key
    }))

    //busca por id
    const filtered = array.filter((valor)=> valor.idUser == id)
    
    // console.warn('getDataFromFirebaseById-filtered', tabla, filtered)

    return filtered
    
    } catch (e) {
        console.log(e.message)
    }
}


export const getDataFromFirebaseByIdUser = async (tabla='users', idUser) => {
    try {
        if (!idUser) {
            console.log('getDataFromFirebaseByIdUser', 'idUser vacío')
            return
        }
    const response = await fetch(`${URL_API}${tabla}.json`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    }) 
    
    const result = await response.json();
    //devuelve un array de objetos
    const array = Object.keys(result).map(key => ({
        ...result[key],
        id: key
    }))

    //busca por id
    const filtered = array.filter((valor)=> valor.idUser == idUser)

    return filtered
    
    } catch (e) {
        console.log(e.message)
    }
}


export const deleteFavoritoFromFirebaseById = async (id) => {
    try {
        
    const response = await fetch(`${URL_API}favoritos.json/${id}`, {
        method: 'DELETE',
    }) 
    
    const result = await response.json();

    return result
    
    } catch (e) {
        console.log(e.message)
    }
}
