import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { ConditionalStyle } from "../styles/ConditionalStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  favoritos_agregar,
  favoritos_eliminar,
  favoritos_load,
} from "../../store/actions/favoritos.actions";
import Ionicons from "@expo/vector-icons/Ionicons";

const PaginaLibro = ({ navigation, route }) => {
  const { id, titulo, autor, src, fecha, descripcion } = route.params;
  const [accion, setAccion] = useState("");
  const dispatch = useDispatch();
  const [styles, setStyles] = useState("");

  //redux
  const favoritos = useSelector((state) => state.favoritos.libros);
  const temporales = useSelector((state) => state.temporales.libros);
  const theme = useSelector((state) => state.user.theme);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const index = favoritos.findIndex((libro) => libro.id == id);
    index == -1 ? setAccion("agregar") : setAccion("eliminar");
    setStyles(ConditionalStyle(theme));
  }, [theme]);

  const leer = () => {
    //agrega a Leidos
    // const index = recientes.findIndex((libro)=>libro.id == id)
    // index != -1?
    navigation.navigate("Lector", { id: id, src: src });
  };

  const agregar = () => {
    const index = favoritos.findIndex((libro) => libro.idLibro == id);
    if (index == -1) {
      const libro = temporales.filter((libro) => libro.id == id);
      dispatch(favoritos_agregar(user.idUser, {
        idLibro: libro[0].id,
        titulo: libro[0].titulo,
        autor: libro[0].autor,
        descripcion: libro[0].descripcion,
        fecha: libro[0].fecha
      }));
    }
    dispatch(favoritos_load(user.idUser))
    setAccion("eliminar");
  };

  const eliminar = () => {
    const index = favoritos.findIndex((libro) => libro.idLibro == id);
    // console.log('favoritos', favoritos)
    // console.log('index', index)
    // console.log('favorito a eliminar', favoritos[index].id)
    if (index != -1) {
      dispatch(favoritos_eliminar(favoritos[index].id));
      dispatch(favoritos_load(user.idUser))
    }
    setAccion("agregar");
    // console.log(accion)
    console.log('una vez eliminados', favoritos);
  };

  return (
    <View style={styles.containerLogin}>
      {/* <Text style={styles.h1}>{id}</Text> */}
      <Text style={styles.h1}>{titulo}</Text>
      <Text style={styles.h2}>{autor}</Text>
      
      <View style={styles.cuadro}>
        <Text style={styles.descriptionText}>{descripcion}</Text>
        <Text style={styles.descriptionText}>Año: {fecha}</Text>
      </View>

      <Pressable onPress={leer} style={styles.btn}>
        <Text style={styles.btnText}>
          <Ionicons name="md-eye" size={32} style={styles.btnText} />{" "}
        </Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={accion == "agregar" ? agregar : eliminar}
      >
        <Text style={styles.btnText}>
          {accion == "agregar" ? (
            <Ionicons name="heart" size={32} style={styles.btnText} />
          ) : (
            <Ionicons
              name="heart-dislike-outline"
              size={32}
              style={styles.btnText}
            />
          )}
        </Text>
      </Pressable>

      {/* <BottomTab/> */}
    </View>
  );
};

export default PaginaLibro;
