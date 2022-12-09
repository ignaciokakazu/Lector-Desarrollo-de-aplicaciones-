import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, Pressable} from 'react-native';
import { styles } from "../Styles";
import { BottomTab } from "../navigation/BottomTab";

const PaginaLibro = ({navigation, route}) => {
    // const navigation = useNavigation();
    const {id, titulo, autor} = route.params;

    const atras = () => {
        navigation.goBack();
    }

    const leer = () => {
        navigation.navigate("Lector", {id: id})
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
            <Pressable
            style={styles.btn}>
                <Text style={styles.btnText}>Favorito (agregar)</Text>
            </Pressable>
            
            {/* <BottomTab/> */}
        </View>
    )
}

export default PaginaLibro