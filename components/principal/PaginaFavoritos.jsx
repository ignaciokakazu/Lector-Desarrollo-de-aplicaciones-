import { View, Pressable, TextInput, Text } from "react-native"
import {useState, useEffect} from 'react'
import Listado from "./Listado"
import {ConditionalStyle} from "../styles/ConditionalStyle";
import { useSelector } from "react-redux"

const PaginaFavoritos = ({navigation}) => {
    const [libros, setLibros] = useState([])
    const [searchText, setSearchText] = useState('')
    const favoritos = useSelector((state)=> state.favoritos.libros)
    const [styles, setStyles] = useState('')
    const theme = useSelector((state)=>state.user.theme)

    useEffect(()=>{
        setLibros(favoritos)
        console.log(theme)
        setStyles(ConditionalStyle(theme))
    }, [theme])

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