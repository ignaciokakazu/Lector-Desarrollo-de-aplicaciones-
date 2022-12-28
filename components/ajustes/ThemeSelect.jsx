import {Text, Pressable, TextInput, View, Modal} from 'react-native'
import { useDispatch } from 'react-redux';


const ThemeSelect = (initialTheme) => {
    const [modal, setModal] = useState(false)
    const [theme, setTheme] = useState(initialTheme);
    const themes = ['Oscuro', 'Claro', 'Primavera']
    const dispatch = useDispatch()

    const themesButton = themes.map((theme)=>
    <View>
        <Pressable
        onPress={handleTheme({theme})}>
            <Text>{theme}</Text>
        </Pressable>
    </View>)
    
    const ModalView = () => {

    }

    const handleTheme = (selected) => {
        //dispatch
        setTheme(selected)
    }

    return (
        <>
        <View>
            <Pressable>
                <Text>
                    {theme}
                </Text>
            </Pressable>        

            <Modal>
                <Text>Seleccione el tema</Text>
            </Modal>
        </View>        
        </>
    )
}

