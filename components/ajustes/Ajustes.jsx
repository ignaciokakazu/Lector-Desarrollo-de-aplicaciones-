import { useEffect, useState } from "react";
import { View, Text } from "react-native"
import { useSelector } from "react-redux";
import { ConditionalStyle, style } from '../styles/ConditionalStyle'
import { ThemeSelect } from "./ThemeSelect";

const Ajustes = () => {
    const userState = useSelector((state)=>state.user.user)
    const segmentoState = useSelector((state)=>state.user.segmento)
    const themeState = useSelector(state=>state.user.theme)
    const [styles, setStyles] = useState('');

    useEffect(()=>{
        setStyles(ConditionalStyle(themeState))
    }, [themeState])

    return(
        <View style={styles.containerLogin}>
            <Text style={styles.h2}>Usuario</Text>
            <Text style={styles.text}>{userState}</Text>
            <Text style={styles.h2}>Tema</Text>
            <ThemeSelect themeDefault={themeState}/>            
            <Text style={styles.h2}>Tipo de usuario</Text>
            <Text style={styles.text}>{segmentoState}</Text>
        </View>
    )
}

export default Ajustes;