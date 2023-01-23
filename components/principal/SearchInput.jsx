import { useState, useEffect } from 'react'
import {View, Text, TextInput} from 'react-native'

const SearchInput = (pagina) => {
    const [text, setText] = useState('')
    const [libros, setLibros] = useState([])
    // un estado que sea temporal
    
    useEffect(()=> {
        
    }, [pagina])

    const search = () => {

    }

    return (
        <View>
            <Text>Buscar</Text>
            <TextInput></TextInput>
        </View>
    )
}

export default SearchInput