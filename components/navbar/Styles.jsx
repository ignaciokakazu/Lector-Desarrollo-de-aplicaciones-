import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
    navbar: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        marginLeft: 40,
        heigth:100,
        flexDirection: 'row'
    },
    searchGroup: {
        flexDirection: 'row'
    },
    search: {
        backgroundColor: Colors.secondary,
        color: Colors.text,
        width:300,
        padding: 10,
        textAlign: 'center',
        border: Colors.secondary,
        borderRadius: 4,
    },
    btnSearch: {
        backgroundColor: Colors.secondary,
        float: 'left'
    },
    burguer: {
        flot: 'rigth'
    }
}) 