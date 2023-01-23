import {useState, useEffect} from 'react'
import { View, Pressable, Text } from "react-native"
import {ConditionalStyle} from "../styles/ConditionalStyle";
import Listado from "./Listado"
import { useSelector } from 'react-redux'

const PaginaLeidos = ({navigation}) => {
    const [libros, setLibros] = useState([])
    const [favoritos, setFavoritos] = useState([])
    const [styles, setStyles] = useState('')

    //redux
    const leidos = useSelector((state)=>state.leidos.libros)
    const user = useSelector((state)=>state.user)
    const favoritosRedux = useSelector((state)=>state.favoritos.libros)
    const theme = useSelector((state)=>state.user.theme) //para el useEffect de theme
    // const favoritos = useSelector((state)=>state.favoritos.libros) //lo uso para el useEffect

    useEffect(()=>{
        setLibros(leidos)
        setFavoritos(favoritosRedux)
        console.log('user según selector de paginaLeidos', user)
        console.log(theme)
        setStyles(ConditionalStyle(theme))
    }, [theme, favoritosRedux])

    return (
    <View style={styles.container}>
        <Listado title='Últimos leídos' libros={libros} navigation={navigation}/>
        {/* <BottomTab/> */}
        <Pressable
            onPress={()=>{}}
            style={styles.btn}>
                <Text style={styles.btnText}>Ver más</Text>
            </Pressable>
    </View>)
}

export default PaginaLeidos