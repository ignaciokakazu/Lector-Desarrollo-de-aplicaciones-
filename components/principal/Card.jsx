import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { styles } from "../styles/ConditionalStyle";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Card = ({ item }) => {
  //cuando uso flatlist, uso el hook useNavigation. En los demás casos no hace falta
  const nav = useNavigation();
  const [icono, setIcono] = useState(false);

  //redux
  const favoritos = useSelector((state) => state.favoritos.libros);

  useEffect(() => {
    console.log("favoritos", favoritos);
    console.log("favoritos id", item.id);
    if (favoritos) {
      const index = favoritos.findIndex((libro) => libro.idLibro == item.id);
      if (index != -1) {
        setIcono(true);
      }
    }
  }, [favoritos]);
  // useEffect(()=>{
  //     //acá hace un array con los libros que deberían mostrar ícono de favorito
  //     // if (favoritos) {
  //     //     const index = favoritos.findIndex(libro=>libro.id == item.id)
  //     //     if (index!=-1) {
  //     //         setIcono(true)
  //     //     }
  //     // }
  // },[favoritos, icono])

  const navigateTo = () => {
    // console.log(nav)
    //console.log(nav)
    nav.navigate("Libro", {
      id: item.id,
      titulo: item.titulo,
      autor: item.autor,
      src: item.src,
      fecha: item.fecha,
      descripcion: item.descripcion,
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={navigateTo}
        // onPress={navigation.navigate('Libro', {id: item.id})}
      >
        {/* <Text style={styles.cardText}>{item.id}</Text> */}
        <Text style={styles.cardText}>{item.titulo}</Text>
        <Text style={styles.cardTextAutor}>{item.autor}</Text>
        <Text style={styles.cardTextAutor}>
          {icono == true ? (
            <Ionicons name="heart" size={32} style={styles.btnText} />
          ) : (
            <Ionicons
              name="heart-dislike-outline"
              size={32}
              style={styles.btnText}
            />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
