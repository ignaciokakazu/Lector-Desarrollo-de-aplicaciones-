import { View, Pressable, TextInput, Text } from "react-native"
import {useState, useEffect} from 'react'
import Listado from "./Listado"
import { styles } from "../Styles"
import { useSelector } from "react-redux"

const PaginaFavoritos = ({navigation}) => {
    const [libros, setLibros] = useState([])
    const [searchText, setSearchText] = useState('')
    const favoritos = useSelector((state)=> state.favoritos.libros)

    useEffect(()=>{
        setLibros(favoritos)
    }, [])

    const verMas = (e) => {
        setSearchText(e)
    }

    return (
    <View style={styles.container}>
        <TextInput 
            onChange={(e)=>verMas(e)}
            placeholder='Buscar'
            value={searchText}/>
            
        <Listado title='Favoritos' libros={libros} navigation={navigation}/>
        <Pressable
            onPress={()=>{}}
            style={styles.btn}>
                <Text style={styles.btnText}>Ver más</Text>
            </Pressable>
    </View>)
}

export default PaginaFavoritos