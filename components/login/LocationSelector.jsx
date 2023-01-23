import * as Location from 'expo-location'
import {View, Text, Button, StyleSheet} from 'react-native'
import {useState} from 'react'

export const LocationSelector = () => {
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')

    const handleLocation = async () => {
        const status = await verifyPermision();

        if (!status) {
            return
        }

        const loc = await Location.getCurrentPositionAsync({timeout: 5000})
        setLat(loc.coords.latitude)
        setLon(loc.coords.longitude)
    }
    
    return (
        <View>
            <Button onPress={handleLocation} title='Locación automática'></Button>
            <Text style={styles.texto}>Latitud {lat}</Text>
            <Text style={styles.texto}>Longitud {lon}</Text>
        </View>
    )
}

const verifyPermision = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()

    if (status !=='granted') {
        alert('Permiso no concedido')
        return false
    }
    return true
}

const styles = StyleSheet.create({
    texto: {
        color: 'white'
    }
})