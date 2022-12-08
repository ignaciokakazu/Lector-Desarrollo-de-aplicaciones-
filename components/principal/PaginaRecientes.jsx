import { View } from "react-native"

import Listado from "./Listado"

const PaginaRecientes = ({navigation}) => {
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
        <Listado title='Más recientes' libros={Libros} navigation={navigation}/>

    </View>)
}

export default PaginaRecientes