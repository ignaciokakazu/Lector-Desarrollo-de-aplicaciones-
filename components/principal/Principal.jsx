import React, { useEffect, useState } from "react"
import {View, } from 'react-native';
import { styles } from "../Styles";
import Listado from "./Listado";
import { BottomTab } from "../navigation/BottomTab";


const Principal = () => { //{navigation, route}) => {
    const [usuario, setUsuario] = useState('')
    // const { user, userName } = route.params;
    const [recientes, setRecientes] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [ultimos, setUltimos] = useState([]);

    // useEffect(()=> {
    //     setRecientes(Libros)
    //     setFavoritos(Libros)
    //     setUltimos(Libros)
    // }, [])

    return (
        <View 
            style={styles.container}>

            {/* <Text
            style={styles.h1}>{user}</Text>
                        <Text
            style={styles.h1}>{userName}</Text> */}

            {/* <Listado title='Últimos leídos' libros={ultimos} navigation={navigation}></Listado>
            <Listado title='Favoritos' libros={favoritos} navigation={navigation}></Listado>
            <Listado title='Más recientes' libros={recientes} navigation={navigation}></Listado> */}
            <BottomTab/>
        </View>
    )
}

export default Principal