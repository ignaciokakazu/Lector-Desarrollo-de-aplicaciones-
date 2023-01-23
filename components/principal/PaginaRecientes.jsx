import React from 'react'
import { useEffect, useState } from "react"
import { View, Pressable, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import {ConditionalStyle} from "../styles/ConditionalStyle";
import Listado from "./Listado"
import { set_temporales } from '../../store/actions/temporales.actions';

const PaginaRecientes = ({navigation}) => {
    const [styles, setStyles] = useState('')
    const [libros, setLibros] = useState([])

    //redux
    const temporales = useSelector((state)=> state.temporales.libros)
    const theme = useSelector((state)=>state.user.theme)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        console.log('reciente-temporales-antes', temporales)
        const librosTemporal = temporales.filter((libro)=> libro.fecha > 2022)
        console.log(librosTemporal)
        setLibros(librosTemporal)
        console.log('reciente-temporales-despues', libros)
        setStyles(ConditionalStyle(theme))
    }, [theme])

    return (
    <View style={styles.container}>
        <Listado title='Más recientes' libros={libros} navigation={navigation}/>
    </View>)
}

export default PaginaRecientes