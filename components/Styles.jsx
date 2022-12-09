import { StyleSheet } from "react-native";
import Colors from '../constants/Colors'


export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.background,
        // width: 400,
        // height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        marginLeft: 40,
        fontFamily: 'Poppins-Thin'
    },
    bottomTab: {
        flex:1,
        backgroundColor: Colors.background,
        width: 400,
        // width: "100vh",
        // height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        marginLeft: 40,
        fontFamily: 'Poppins-Thin'
    },
    input: {
        backgroundColor: Colors.secondary,
        color: Colors.text,
        heigth: 50,
        width: 400,
        padding: 10,
        textAlign: 'center',
        marginTop: 20,
        marginRight: 20,
        border: Colors.primary,
        borderRadius: 4,
    },
    btn: {
        backgroundColor: Colors.primary,
        color: Colors.text,
        heigth: 50,
        width: 100,
        padding: 10,
        textAlign: 'center',
        marginTop: 10,
        marginRight: 20
    },
    btnText: {
        color: Colors.text,
    },
    card: {
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 5,
        width:300,
        padding:15,
        marginBottom:10,    
        textAlign: 'left'    
    },
    cardText: {
        color: Colors.black,
        fontSize: 20,
        fontFamily: 'Poppins-Thin'
    },
    cardTextAutor: {
        color: Colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Thin'
    },
    listado: {
        textAlign: 'center'
    },  
    h1: {
        color: Colors.text,
        fontSize: 30,
        fontFamily: 'Poppins-Bold',
        marginTop: 5,
        marginBottom: 5
    },
    h2: {
        color: Colors.text,
        fontSize: 15,
        fontFamily: 'Poppins-Bold',
        marginTop: 3,
        marginBottom: 3
    },
    descriptionText: {
        color: Colors.text,
        fontSize: 12
    },
    errorMsg: {
        color: Colors.text,
        fontSize: 15,
        fontFamily: 'Poppins-Bold',
        marginTop: 10,
    }
})

