import { View } from "react-native"
import { BottomTab } from "../navigation/BottomTab"
import { styles } from "../Styles"
import Listado from "./Listado"

const PaginaLeidos = ({navigation}) => {
    const Libros = [{
        id: 0,
        titulo: 'Libro 0',
        autor: 'Algún autor'
    },{
        id: 1,
        titulo: 'Libro 1',
        autor: 'Algún autor'
    }]

    return (
    <View style={styles.container}>
        <Listado title='Últimos leídos' libros={Libros} navigation={navigation}/>
        {/* <BottomTab/> */}
    </View>)
}

export default PaginaLeidos