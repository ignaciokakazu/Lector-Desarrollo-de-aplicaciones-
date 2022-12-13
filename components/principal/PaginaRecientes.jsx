import React from 'react'
import { useEffect, useState } from "react"
import { View, Pressable, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { styles } from "../Styles"
import Listado from "./Listado"

const PaginaRecientes = ({navigation}) => {
    // const [libros, setLibros] = useState([])
    const libros = useSelector((state)=> state.recientes.libros)

    useEffect(()=>{
        // setLibros(recientes)
        console.log(libros)
        // console.log(recientes)
    }, [])

    return (
    <View style={styles.container}>
        <Listado title='Más recientes' libros={libros} navigation={navigation}/>
        <Pressable
            onPress={()=>{}}
            style={styles.btn}>
                <Text style={styles.btnText}>Ver más</Text>
            </Pressable>
    </View>)
}

export default PaginaRecientes