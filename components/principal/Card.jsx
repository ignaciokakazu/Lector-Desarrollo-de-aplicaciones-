import React from "react";
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {styles} from "../styles/ConditionalStyle";
import { useNavigation } from '@react-navigation/native';


const Card = ({item}) => {
    //cuando uso flatlist, uso el hook useNavigation. En los demás casos no hace falta
    const nav = useNavigation();

    const navigateTo = () => {
        // console.log(nav)
        //console.log(nav)
        nav.navigate('Libro', {id: item.id, titulo: item.titulo, autor: item.autor})
    }

    return (
        <TouchableOpacity style={styles.card}
        onPress={navigateTo}
        // onPress={navigation.navigate('Libro', {id: item.id})}
        >
            <Text style={styles.cardText}>{item.id}</Text>
            <Text style={styles.cardText}>{item.titulo}</Text>
        <Text style={styles.cardTextAutor}>{item.autor}</Text>
        </TouchableOpacity>
    )
}

export default Card