import React from "react";
import {View, Text, Pressable} from 'react-native';
import Card from "./Card";
import {styles} from "../styles/ConditionalStyle";
import { FlatList } from "react-native";
// import {FlatList} from 'react-navigation'


const Listado = ({title, libros, navigation}) => {

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