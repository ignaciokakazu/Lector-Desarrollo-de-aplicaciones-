import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { styles } from "../styles/ConditionalStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  get_temporales,
  set_temporales,
} from "../../store/actions/temporales.actions";
import { set_usuario } from "../../store/actions/user.actions";
import { validacionLogin } from "./loginFunctions";
import { getDataFromFirebase, userObjToArray } from "../../db/FirebaseQuerys";
import { favoritos_load } from "../../store/actions/favoritos.actions";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //redux
  const userRedux = useSelector((state) => state.user);
  const temporales = useSelector((state) => state.temporales.libros);
  const favoritos = useSelector((state) => state.favoritos.libros);
  const dispatch = useDispatch();

  const handleUser = (email) => {
    setUser(email);
  };

  const handlePassword = (pass) => {
    setPassword(pass);
  };

  const enviar = async () => {
    const validacionMsg = validacionLogin(user, password);

    if (!validacionMsg.estado) {
      setErrorMsg(validacionMsg.msg);
      return;
    }

    const users = await getDataFromFirebase("users");
    // console.log('login', users)

    const valido = users.filter(
      (valor) => valor.user == user && valor.password == password
    );

    if (!valido.length) {
      setErrorMsg("Usuario o contraseña erróneos");
      return;
    }
    console.log(valido);

    /* Esto es propio de cada aplicación */
    //carga todos los estados del usuario
    dispatch(
      set_usuario(
        valido[0].id,
        valido[0].user,
        valido[0].theme,
        valido[0].segmento
      )
    );
    //dispatch(get_temporales())
    
    navigation.navigate("Principal");
  };

  const register = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.containerLogin}>
      <Image source={require("../../assets/logo-oscuro.png")}></Image>
      <TextInput
        onChangeText={(email) => handleUser(email)}
        placeholder="E-mail del usuario"
        value={user}
        style={styles.input}
      />

      <TextInput
        onChangeText={(pass) => handlePassword(pass)}
        onBlur={() => {}}
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        style={styles.input}
      />

      <Text style={styles.errorMsg}>{errorMsg}</Text>

      <Pressable onPress={enviar} style={styles.btn}>
        <Text style={styles.btnText}>Enviar</Text>
      </Pressable>

      <Pressable onPress={register} style={styles.btn}>
        <Text style={styles.btnText}>Soy nuevo</Text>
      </Pressable>
    </View>
  );
};

export default Login;
