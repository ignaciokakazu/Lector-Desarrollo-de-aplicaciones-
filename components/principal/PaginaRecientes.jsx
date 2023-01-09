import React from 'react'
import { useEffect, useState } from "react"
import { View, Pressable, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import {ConditionalStyle} from "../styles/ConditionalStyle";
import Listado from "./Listado"

const PaginaRecientes = ({navigation}) => {
    // const [libros, setLibros] = useState([])
    const libros = useSelector((state)=> state.recientes.libros)
    const [styles, setStyles] = useState('')
    const theme = useSelector((state)=>state.user.theme)

    useEffect(()=>{
        console.log(theme)
        setStyles(ConditionalStyle(theme))
    }, [theme])

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