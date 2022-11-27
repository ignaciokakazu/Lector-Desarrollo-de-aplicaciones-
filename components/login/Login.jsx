import React, { useState } from "react";
import {View, Text, TextInput, Pressable, Image} from 'react-native';
import { styles } from "../Styles";

const Login = ({navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleUser = (email) => {
        //validar que sea un email válido
        setUser(email)
        console.log(email)
    }

    const handlePassword = (pass) => {
        //validar que sea un password válido
        setPassword(pass)
        console.log(password)
    }

    const enviar = () => {
        const validacionUser = validarUser(user)
        const validacionPassword = validarPassword(password);

        if (!validacionUser){
            setErrorMsg('Error en usuario')
            return 
        }
        
        if (!validacionPassword) {
            setErrorMsg('Error en password')
            return 
        }

        if (user === 'admin' && password === 'admin') {
            navigation.navigate('Principal', {user: user, userName: 'loco'})
        } else {
            setErrorMsg('El usuario es admin y password es admin')
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Logo</Text>
            <Text style={styles.h1}>Login</Text>
            {/* <Image
                source={require('../../assets/logo.png')}
            ></Image> */}
            <TextInput
                //style={styles.input}
                onChangeText={(email)=>handleUser(email)}
                placeholder="E-mail del usuario"
                value={user}
                style={styles.input}
                />
            
            <TextInput
                onChangeText={(pass)=> handlePassword(pass)}
                onBlur={()=>{}}
                placeholder="Password"
                value={password}
                style={styles.input}
                />
            
            <Text style={styles.errorMsg}>{errorMsg}</Text>

            <Pressable
            onPress={enviar}
            style={styles.btn}>
                <Text style={styles.btnText}>Enviar</Text>
            </Pressable>
            
        </View>
    )
}

const validarUser = (userValidate) =>{
    if (!userValidate) { return false}
    return true
}

const validarPassword = (passwordValidate) => {
    if (!passwordValidate) { return false}
    return true
}

export default Login
