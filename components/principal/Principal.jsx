import React, { useEffect, useState } from "react";
import { Pressable, View, Button, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ConditionalStyle } from "../styles/ConditionalStyle";
import {
  get_temporales,
  set_temporales,
} from "../../store/actions/temporales.actions";
import { favoritos_load } from "../../store/actions/favoritos.actions";
import Ionicons from "@expo/vector-icons/Ionicons";
/*
    En Principal, carga todos los libros y favoritos.

*/

const Principal = ({ navigation }) => {
  //{navigation, route}) => {
  const [usuario, setUsuario] = useState("");
  const [styles, setStyles] = useState("");

  //redux
  const theme = useSelector((state) => state.user.theme);
  const userRedux = useSelector((state) => state.user.idUser);
  const temporales = useSelector((state) => state.temporales.libros);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(theme);
    setStyles(ConditionalStyle(theme));
    console.log("principal-temporales", temporales);
    cargar_estados();
    // console.log('principal-temporales', temporales)
    // console.log('principal-libros', libros)
  }, [theme]);

  const cargar_estados = async () => {
    console.warn("cargar_estados");
    /* cambio de estado */
    dispatch(favoritos_load(userRedux));
    dispatch(get_temporales());
    if (temporales == undefined || !temporales.length) {
      console.error("fatal error en la carga de libros");
    }

    console.log("principal-temporales", temporales);
  };

  const linkTo = (pagina) => {
    navigation.navigate(pagina);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo-oscuro.png")}></Image>
      
      <View style={styles.containerMenu}>
      <Pressable onPress={() => linkTo("Buscar libros")} style={styles.menuBtn}>
        <Ionicons name="search" size={32} style={styles.btnText} />
        <Text style={styles.btnText}>Buscar libros</Text>
      </Pressable>

      {/* <Pressable
        onPress={() => linkTo("Últimos leídos")}
        style={styles.menuBtn}
      >
        <Ionicons name="md-checkmark-circle" size={32} style={styles.btnText} />
        <Text style={styles.btnText}>Últimos leídos</Text>
      </Pressable> */}

      <Pressable onPress={() => linkTo("Favoritos")} style={styles.menuBtn}>
        <Ionicons name="heart" size={32} style={styles.btnText} />
        <Text style={styles.btnText}>Favoritos</Text>
      </Pressable>

      <Pressable onPress={() => linkTo("Más recientes")} style={styles.menuBtn}>
        <Ionicons name="refresh-outline" size={32} style={styles.btnText} />
        <Text style={styles.btnText}>Más reciente</Text>
      </Pressable>

      <Pressable onPress={() => linkTo("Ajustes")} style={styles.menuBtn}>
        <Ionicons name="key-outline" size={32} style={styles.btnText} />
        <Text style={styles.btnText}>Ajustes</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default Principal;
