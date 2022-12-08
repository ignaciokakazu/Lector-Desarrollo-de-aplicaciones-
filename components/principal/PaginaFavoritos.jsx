import { View } from "react-native"
import { BottomTab } from "../navigation/BottomTab"
import Listado from "./Listado"

const PaginaFavoritos = ({navigation}) => {
    const Libros = [{
        id: 0,
        titulo: 'Libro 0',
        autor: 'Algún autor'
    },{
        id: 1,
        titulo: 'Libro 1',
        autor: 'Algún autor'
    }]

    return (<View>
        <Listado title='Favoritos' libros={Libros} navigation={navigation}/>
        {/* <BottomTab/> */}
    </View>)
}

export default PaginaFavoritos