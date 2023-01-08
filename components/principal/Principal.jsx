import React, { useEffect, useState } from "react"
import {Pressable, View, Button} from 'react-native';
import { styles } from "../Styles";
import Listado from "./Listado";
import { BottomTab } from "../navigation/BottomTab";
import { selectFavorito } from "../../db";
import { useDispatch } from "react-redux";
import { favoritos_load } from "../../store/actions/favoritos.actions";

const Principal = ({navigation}) => { //{navigation, route}) => {
    const [usuario, setUsuario] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(favoritos_load())
    })
    // const { user, userName } = route.params;

    // useEffect(()=> {
    //     setRecientes(Libros)
    //     setFavoritos(Libros)
    //     setUltimos(Libros)
    // }, [])
    // const selFavorito = () => {
    //     selectFavorito()
    //         .then((result)=> console.log('selectFavorito', result))
    // }
    
    const linkTo = (pagina) => {
        navigation.navigate(pagina)
    }

    return (
        <View 
            style={styles.container}>

            {/* <Button
                onPress={selFavorito}
                title='selFavorito'
                /> */}
            {/* <Text
            style={styles.h1}>{user}</Text>
                        <Text
            style={styles.h1}>{userName}</Text> */}
            <Button
                title='Últimos leídos'
                onPress={()=>linkTo('Últimos leídos')}
                style={styles.menuBtn}
            />
            <Button
                title='Favoritos'
                onPress={()=>linkTo('Favoritos')}
                style={styles.menuBtn}
            />
            <Button
                title='Más recientes'
                onPress={()=>linkTo('Más recientes')}
                style={styles.menuBtn}
            />

            <Button
                title='Ajustes'
                onPress={()=>linkTo('Ajustes')}
                style={styles.menuBtn}
            />
            {/* <Listado title='Últimos leídos' libros={ultimos} navigation={navigation}></Listado>
            <Listado title='Favoritos' libros={favoritos} navigation={navigation}></Listado>
            <Listado title='Más recientes' libros={recientes} navigation={navigation}></Listado> */}
            {/* <BottomTab/> */}
        </View>
    )
}

export default Principal