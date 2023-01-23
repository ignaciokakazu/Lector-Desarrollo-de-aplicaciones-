import {Text, Pressable, TextInput, View, Modal, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'react-native-web';
import { styles } from '../styles/ConditionalStyle'
import { set_theme } from '../../store/actions/user.actions';

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
    const [modalVisible, setModalVisible] = useState(false)
    const [theme, setTheme] = useState(themeDefault);
    const dispatch = useDispatch()

    const ModalView = () => {
        setModalVisible(true)
    }

    const handleTheme = (selected='Claro') => {
        //dispatch
        setTheme(selected)
        console.log('despacaha')
        dispatch(set_theme(selected))
        console.log('terminó de despachar')
        setModalVisible(false)        
    }

    return (
        <>
        <View>
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
