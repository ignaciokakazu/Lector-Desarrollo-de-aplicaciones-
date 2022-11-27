import { useEffect } from 'react';
import {View, Text, Pressable} from 'react-native'

const VerMas = ({navigation, route}) => {
    const { listado } = route.params;

    useEffect(()=>{}, [])
    //trae los datos y arma los cards con FlatList

    const ver = () => {
        console.log('listado', listado)
        console.log('route', route)
    }
    
    return (
        <View>
            <Text>{listado}</Text>
            <Text>Acá se generan todos los datos de cada uno de los listados</Text>            
        </View>
    )
}

export default VerMas