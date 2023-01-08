import React, { useState } from "react";
import {View, Text, TextInput, Pressable, Image} from 'react-native';
import { styles } from "../Styles";
import { useSelector, useDispatch } from "react-redux";
import { set_usuario } from "../../store/actions/user.actions";
import { validacionLogin } from "./loginFunctions";
import { LocationSelector } from "./LocationSelector";

const Login = ({navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const userRedux = useSelector((state)=> state.user)
    const dispatch = useDispatch()

    const handleUser = (email) => {
        setUser(email)
    }

    const handlePassword = (pass) => {
        setPassword(pass)
    }

    const enviar = () => {
        const validacionMsg = validacionLogin(user, password);
        
        if (!validacionMsg.estado){
            setErrorMsg(validacionMsg.msg)
            return 
        } else {
            dispatch(set_usuario(user))
            console.log('user_redux', userRedux.user)
            navigation.navigate('Principal')            
        }
    }

    const register = () => {
        navigation.navigate('Register')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Logo</Text>
            <Text style={styles.h1}>Login</Text>
            {/* <Image
                source={require('../../assets/logo.png')}
            ></Image> */}
            <TextInput
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


            <Pressable
            onPress={register}
            style={styles.btn}>
                <Text style={styles.btnText}>Soy nuevo</Text>
            </Pressable>
            
        </View>
    )
}

export default Login
