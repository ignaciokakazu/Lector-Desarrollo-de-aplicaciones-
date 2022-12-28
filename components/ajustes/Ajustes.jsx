import { useEffect, useState } from "react";
import { View, Text } from "react-native"
import { useSelector } from "react-redux";

const Ajustes = () => {
    const [theme, setTheme] = useState()
    const userState = useSelector((state)=>state.user.user)
    const segmentoState = useSelector((state)=>state.user.segmento)
    const themeState = useSelector(state=>state.user.theme)

    return(
        <View>
            <Text>Usuario</Text>
            <Text>{userState}</Text>
            <Text>Tema</Text>
            <Text>{themeState}</Text>
            <Text>Tipo de usuario</Text>
            <Text>{segmentoState}</Text>
        </View>
    )
}

export default Ajustes;