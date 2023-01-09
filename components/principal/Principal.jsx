import React, { useEffect, useState } from "react"
import {Pressable, View, Button} from 'react-native';
// import { styles } from "../styles/Styles";
import Listado from "./Listado";
import { BottomTab } from "../navigation/BottomTab";
import { selectFavorito } from "../../db";
import { useDispatch, useSelector } from "react-redux";
import { favoritos_load } from "../../store/actions/favoritos.actions";
import { ConditionalStyle } from "../styles/ConditionalStyle";

const Principal = ({navigation}) => { //{navigation, route}) => {
    const [usuario, setUsuario] = useState('')
    const theme = useSelector((state)=> state.user.theme)
    //const [color, setColor] = useState('black')
    const [styles, setStyles] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(theme)
        setStyles(ConditionalStyle(theme))
        
        dispatch(favoritos_load())
    }, [theme])

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