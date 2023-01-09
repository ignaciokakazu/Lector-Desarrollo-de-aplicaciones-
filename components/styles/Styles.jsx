import { StyleSheet } from "react-native"

export const stylesheetObj = (theme) => {
    return StyleSheet.create({
        containerLogin: {
            flex:1,
            backgroundColor: theme.background,
            width: "100%",
            // height: "100%",
            justifyContent: 'center',
            alignItems: 'center',
            //fontFamily: 'Poppins-Thin'
        },
        container: {
            backgroundColor: theme.background,
            width: "100%",
            // height: "100%",
            justifyContent: 'center',
            alignItems: 'center',
            //fontFamily: 'Poppins-Thin'
        },
        // container: (color = 'black') => ({
        //     backgroundColor: color, //Colors[theme].background,
        //     width: "100%",
        //     // height: "100%",
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     //fontFamily: 'Poppins-Thin'
        // }),
        bottomTab: {
            flex:1,
            backgroundColor: theme.background,
            width: 400,
            // width: "100vh",
            // height: "100%",
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 40,
            marginLeft: 40,
            //fontFamily: 'Poppins-Thin'
        },
        menuBtn: {
            width: 400,
            height: 400,
            backgroundColor: 'yellow'
        },  
        input: {
            backgroundColor: theme.secondary,
            color: theme.text,
            heigth: 50,
            width: 300,
            padding: 10,
            textAlign: 'center',
            marginTop: 20,
            marginRight: 20,
            border: theme.primary,
            borderRadius: 4,
        },
        btn: {
            backgroundColor: theme.primary,
            color: theme.text,
            heigth: 50,
            width: 100,
            padding: 10,
            textAlign: 'center',
            marginTop: 10,
            marginRight: 20
        },
        btnText: {
            color: theme.text,
        },
        card: {
            backgroundColor: theme.card,
            shadowColor: theme.black,
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
            color: theme.black,
            fontSize: 20,
            //fontFamily: 'Poppins-Thin'
        },
        cardTextAutor: {
            color: theme.black,
            fontSize: 12,
            //fontFamily: 'Poppins-Thin'
        },
        listado: {
            textAlign: 'center'
        },  
        h1: {
            color: theme.text,
            fontSize: 30,
            //fontFamily: 'Poppins-Bold',
            marginTop: 5,
            marginBottom: 5
        },
        h2: {
            color: theme.text,
            fontSize: 15,
            //fontFamily: 'Poppins-Bold',
            marginTop: 3,
            marginBottom: 3
        },
        descriptionText: {
            color: theme.text,
            fontSize: 12
        },
        text: {
            color: theme.text,
            fontSize: 12
        },
        errorMsg: {
            color: theme.text,
            fontSize: 15,
            //fontFamily: 'Poppins-Bold',
            marginTop: 10,
        }
    })
}