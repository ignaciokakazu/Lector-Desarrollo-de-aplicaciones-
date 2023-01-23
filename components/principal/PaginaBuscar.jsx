import React from 'react'
import { useEffect, useState } from "react"
import { View, Pressable, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import {ConditionalStyle} from "../styles/ConditionalStyle";
import Listado from "./Listado"
import { set_temporales } from '../../store/actions/temporales.actions';

const PaginaBuscar = ({navigation}) => {
    const [styles, setStyles] = useState('')
    const [libros, setLibros] = useState([])

    //redux
    const temporales = useSelector((state)=> state.temporales.libros)
    const theme = useSelector((state)=>state.user.theme)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        console.log(temporales)
        setLibros(temporales)
        setStyles(ConditionalStyle(theme))
    }, [theme])

    return (
    <View style={styles.container}>
        <Listado title='Todos los libros' libros={libros} navigation={navigation}/>
        <Pressable
            onPress={()=>{}}
            style={styles.btn}>
                <Text style={styles.btnText}>Ver más</Text>
            </Pressable>
    </View>)
}

export default PaginaBuscar