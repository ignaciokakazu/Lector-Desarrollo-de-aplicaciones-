import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, Pressable} from 'react-native';
import { styles } from "../Styles";
import { BottomTab } from "../navigation/BottomTab";

const PaginaLibro = ({navigation, route}) => {
    // const navigation = useNavigation();
    const {id, titulo, autor} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>{id}</Text>
            <Text style={styles.h2}>{titulo}</Text>
            <Text style={styles.h2}>{autor}</Text>
            <Text style={styles.descriptionText}>Descripción</Text>
            <Text style={styles.descriptionText}>Año</Text>
            <Pressable>
                <Text>Leer</Text>
            </Pressable>
            <Pressable>
                <Text>Favorito (agregar)</Text>
            </Pressable>
            
            {/* <BottomTab/> */}
        </View>
    )
}

export default PaginaLibro