import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {View, Text, Pressable} from 'react-native';
import { styles } from "../Styles";
import { BottomTab } from "../navigation/BottomTab";
import { useDispatch, useSelector } from "react-redux";
import { favoritos_agregar, favoritos_eliminar } from "../../store/actions/favoritos.actions";

const PaginaLibro = ({navigation, route}) => {
    const {id, titulo, autor} = route.params;
    const [accion, setAccion] = useState('');
    const favoritos = useSelector((state)=> state.favoritos.libros)
    const recientes = useSelector((state)=> state.recientes.libros)
    const dispatch = useDispatch()

    useEffect(()=>{
        const index = favoritos.findIndex((libro)=>libro.id == id) 
        index == -1? setAccion('agregar') : setAccion('eliminar')
    }, [])

    const atras = () => {
        navigation.goBack();
    }

    const leer = () => {
        //agrega a Recientes
        const index = recientes.findIndex((libro)=>libro.id == id)
        // index != -1? 
        navigation.navigate("Lector", {id: id})
    }

    // tengo que mejorar esta función. Unificarla según Accion
    const agregar = () => {
        console.log(favoritos)
        const index = favoritos.findIndex((libro)=>libro.id == id)
        if (index==-1) {
            dispatch(favoritos_agregar(id, titulo, autor))
            setAccion('eliminar')
        }         
        // console.log(accion)
        console.log(favoritos)
    }

    const eliminar = () => {
        console.log(favoritos)
        const index = favoritos.findIndex((libro)=>libro.id == id)
        if (index!=-1) {
            dispatch(favoritos_eliminar(id))
            setAccion('agregar')
        }
        // console.log(accion)
        console.log(favoritos)
    }

    return (
        <View style={styles.container}>
            <Pressable
            onPress={atras}
            style={styles.btn}
            >
                <Text style={styles.btnText}>Atrás</Text></Pressable>

            <Text style={styles.h1}>{id}</Text>
            <Text style={styles.h2}>{titulo}</Text>
            <Text style={styles.h2}>{autor}</Text>
            <Text style={styles.descriptionText}>Descripción</Text>
            <Text style={styles.descriptionText}>Año</Text>
            <Pressable
            onPress={leer}
            style={styles.btn}>
                <Text style={styles.btnText}>Leer</Text>
            </Pressable>

            {accion=='agregar'?
                <Pressable
                style={styles.btn}
                onPress={agregar}>
                    <Text style={styles.btnText}>Favorito (agregar)</Text>
                </Pressable> 
                :
                <Pressable
                style={styles.btn}
                onPress={eliminar}>
                    <Text style={styles.btnText}>Favorito (eliminar)</Text>
                </Pressable> 
            }
            {/* <BottomTab/> */}
        </View>
    )
}

export default PaginaLibro