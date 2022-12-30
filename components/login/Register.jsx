import React, { useState } from "react";
import {View, Text, TextInput, Pressable, Image} from 'react-native';
import { styles } from "../Styles";
import { validacionRegister } from "./loginFunctions";
import { useDispatch } from "react-redux";
import { set_usuario } from "../../store/actions/user.actions";
import { LocationSelector } from "./LocationSelector";

const Register = ({navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const dispatch = useDispatch()

    const handleEmail = (email) => {
        //validar que sea un email válido
        setEmail(email)
    }

    const handlePassword = (pass) => {
        setPassword(pass)
    }
    
    const handlePasswordConfirm = (pass) => {
        setPasswordConfirm(pass)
    }

    const registrar = () => {
        const message = validacionRegister(email, password, passwordConfirm)

        if (!message.estado) {
            setErrorMsg(message.msg)
        } else {
            alert('Grabar en la bd')
            dispatch(set_usuario(email))
            navigation.navigate('Principal')
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Logo</Text>
            <Text style={styles.h1}>Register</Text>
            {/* <Image
                source={require('../../assets/logo.png')}
            ></Image> */}
            <TextInput
                //style={styles.input}
                onChangeText={(email)=>handleEmail(email)}
                placeholder="E-mail del usuario"
                value={email}
                style={styles.input}
                />
            
            <TextInput
                onChangeText={(pass)=> handlePassword(pass)}
                onBlur={()=>{}}
                placeholder="Password"
                value={password}
                style={styles.input}
                />

            <TextInput
                onChangeText={(pass)=> handlePasswordConfirm(pass)}
                onBlur={()=>{}}
                placeholder="Password Confirmation"
                value={passwordConfirm}
                style={styles.input}
                />
            
            <Text style={styles.errorMsg}>{errorMsg}</Text>

            <LocationSelector/>
            <Pressable
            onPress={registrar}
            style={styles.btn}>
                <Text style={styles.btnText}>Enviar</Text>
            </Pressable>
            
        </View>
    )
}

export default Register