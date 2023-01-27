import {Text, Pressable, TextInput, View, Modal, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'react-native-web';
import { ConditionalStyle, styles } from '../styles/ConditionalStyle'
import { set_theme } from '../../store/actions/user.actions';
import { useEffect } from 'react';

const themesObj = [{
    id: 0,
    name: 'Oscuro'
}, {
    id: 1,
    name: 'Claro'
}, {
    id:2,
    name: 'Primavera'
}]

export const ThemeSelect = ({themeDefault}) => {
    const [styles, setStyles] = useState(themeDefault)
    const [modalVisible, setModalVisible] = useState(false)
    const [theme, setTheme] = useState(themeDefault);
    const dispatch = useDispatch()

    useEffect(()=>{
        setStyles(ConditionalStyle(themeDefault))
    }, [theme])

    const ModalView = () => {
        setModalVisible(true)
    }

    const handleTheme = (selected='Claro') => {
        //dispatch
        setStyles(selected)
        dispatch(set_theme(selected))
        setModalVisible(false)        
    }

    return (
        <>
        <View style={styles.containerLogin}>
            <Pressable
                onPress={ModalView}
                title={theme}
                style={styles.btn}
            ><Text style={styles.btnText}>{theme}</Text>
            </Pressable>

            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisible}
                style={styles.container}>
                <Text style={styles.cardText}>Seleccione el tema</Text>

                <View>
                    <Pressable
                    onPress={()=>handleTheme('Oscuro')}
                    style={styles.btn}
                    ><Text>Oscuro</Text>
                    </Pressable>
                    <Pressable
                    onPress={()=>handleTheme('Claro')}
                    style={styles.btn}
                    ><Text>Claro</Text>
                    </Pressable>
                    <Pressable
                    onPress={()=>handleTheme('Primavera')}
                    style={styles.btn}
                    ><Text>Primavera</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>        
        </>
    )
}
