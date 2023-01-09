import {Text, Pressable, TextInput, View, Modal, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'react-native-web';
import { styles } from '../styles/ConditionalStyle'
import { set_theme } from '../../store/actions/user.actions';

export const ThemeSelect = ({themeDefault}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [theme, setTheme] = useState(themeDefault);
    const dispatch = useDispatch()
    const user = useSelector(state=> state.user)

    const ModalView = () => {
        setModalVisible(true)
    }

    const handleTheme = (selected) => {
        //dispatch
        setTheme(selected)
        setModalVisible(false)
        dispatch(set_theme(theme))
    }

    return (
        <>
        <View>
            <Button
                onPress={ModalView}
                title={theme}
                />

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                style={styles.container}>
                <Text>Seleccione el tema</Text>
                <View>
                    <Button
                    onPress={()=>handleTheme('Oscuro')}
                    title='Oscuro'
                    />
                    <Button
                    onPress={()=>handleTheme('Claro')}
                    title='Claro'
                    />
                    <Button
                    onPress={()=>handleTheme('Primavera')}
                    title='Primavera'
                    />
                </View>
            </Modal>
        </View>        
        </>
    )
}
