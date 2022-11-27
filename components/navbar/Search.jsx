import React, {useState} from "react";
import {View, TextInput, Text, Pressable} from 'react-native';
import { styles } from "./Styles";

const Search = () => {
    const [text, setText] = useState('')

    const handleText = (search) => {
        setText(search)
        console.log(text)
    }

    return (
        <View style={styles.searchGroup}>
            <TextInput
                onChangeText={(search)=>handleText(search)}
                value={text}
                style={styles.search}
                placeholder="Buscar"
                />
            <Pressable><Text>Buscar</Text></Pressable>
        </View>
    )
}

export default Search