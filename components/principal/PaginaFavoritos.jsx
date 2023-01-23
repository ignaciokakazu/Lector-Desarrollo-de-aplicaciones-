import React from 'react'
import { useEffect, useState } from "react"
import { View, Pressable, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import {ConditionalStyle} from "../styles/ConditionalStyle";
import Listado from "./Listado"
import { set_temporales } from '../../store/actions/temporales.actions';

const PaginaFavoritos = ({navigation}) => {
    const [styles, setStyles] = useState('')
    const [libros, setLibros] = useState([])

    //redux
    const favoritos = useSelector((state)=> state.favoritos.libros)
    const theme = useSelector((state)=>state.user.theme)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setLibros(favoritos)
        setStyles(ConditionalStyle(theme))
    }, [theme])

    return (
    <View style={styles.container}>
        <Listado title='Favoritos' libros={libros} navigation={navigation}/>
    </View>)
}

export default PaginaFavoritos