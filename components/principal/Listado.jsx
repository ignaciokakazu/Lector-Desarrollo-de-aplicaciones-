import React from "react";
import {View, Text, Pressable} from 'react-native';
import Card from "./Card";
import {styles} from "../styles/ConditionalStyle";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
// import {FlatList} from 'react-navigation'

const Listado = ({title, libros, navigation}) => {
    //redux
    const favoritos = useSelector(state=>state.favoritos.libros)
    
    const navigateTo = () => {
        navigation.navigate('Libro', {listado: title})
    }

    return (
        <View style={styles.listado}>
            <Text style={styles.h1}>{title}</Text>
            <FlatList            
            data={libros}
            renderItem={(props)=> <Card {...props} />}
            keyExtractor={item => item.id}
      />
        </View>
    )
}

export default Listado