import React, { useState } from "react";
import {View, Text, TextInput, Pressable, Image} from 'react-native';
import {styles} from "../styles/ConditionalStyle";
import { validacionRegister } from "./loginFunctions";
import { useDispatch } from "react-redux";
import { set_usuario } from "../../store/actions/user.actions";
import { LocationSelector } from "./LocationSelector";
import {altaUsuario, getDataFromFirebase, getUsuarios} from '../../db/FirebaseQuerys';

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

    const registrar = async () => {
        const message = validacionRegister(email, password, passwordConfirm)
        console.log('registrar', message)
        if (!message.estado) {
            setErrorMsg(message.msg)
        } else {
            //está repetido?
            const usuarios = await getDataFromFirebase('users')
            const index = usuarios.findIndex(user => user.user == email)
            if (index!=-1) {
                setErrorMsg('Email ya registrado')
                return
            }
            const result = await altaUsuario(email, password)
            const usuarios2 = await getDataFromFirebase('users')
            console.log(usuarios2)
            const index2= usuarios2.findIndex(user => user.user == email)
            console.log(index2)
            const idUser = usuarios2[index2].id
            const theme = usuarios2[index2].theme
            const segmento = usuarios2[index2].segmento
            dispatch(set_usuario(idUser, email, theme, segmento))            
            navigation.navigate('Principal')
        }
    }

    return(
        <View style={styles.containerLogin}>
            <Image
                source={require('../../assets/logo-oscuro.png')}
            ></Image>
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
                secureTextEntry={true}
                placeholder="Password"
                value={password}
                style={styles.input}
                />

            <TextInput
                onChangeText={(pass)=> handlePasswordConfirm(pass)}
                onBlur={()=>{}}
                secureTextEntry={true}
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