import {useState, useEffect} from 'react'
import { View, Pressable, Text } from "react-native"
import { styles } from "../Styles"
import Listado from "./Listado"
import { useSelector } from 'react-redux'

const PaginaLeidos = ({navigation}) => {
    const [libros, setLibros] = useState([])
    const leidos = useSelector((state)=>state.leidos.libros)
    const user = useSelector((state)=>state.user)

    useEffect(()=>{
        setLibros(leidos)
        console.log('user según selector de paginaLeidos', user)
    }, [])

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