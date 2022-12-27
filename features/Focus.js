import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {TextInput} from "react-native-paper";

/*
React Native Paper is a high-quality, standard-compliant Material Design library that has
you covered in all major use-cases.
https://callstack.github.io/react-native-paper/getting-started.html
 */
export const Focus = () => {
    return (
    <View style={styles.container}>
       <TextInput label="Focus item?" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "white",
        fontSize: 48,
    },
});