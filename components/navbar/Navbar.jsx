import React from "react";
import {View,Text} from 'react-native';
import Burguer from "./Burguer";
import Search from "./Search";
import { styles } from "./Styles";

const Navbar = () => {

    return (
        <View style={styles.navbar}>
            <Search style={styles.search}></Search>
            <Burguer></Burguer>
        </View>
    )
}

export default Navbar