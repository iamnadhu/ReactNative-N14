import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {

    const myself = 'I am Nadhu';
    const number = 123456;
    const arrayNumber = [123, 456];
    const arrayNames = ['abc', 'def'];
    const hello = <Text> Hello! </Text>

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Components! </Text>
            <Text style={styles.textSub}> Hi there! </Text>
            <Text> {myself} </Text>
            <Text> {number} </Text>
            <Text> {arrayNumber} </Text>
            <Text> {arrayNames} </Text>
            {hello}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    text: {
        fontSize: 25,
        marginBottom: 10
    },
    textSub: {
        fontSize: 20
    }
});

export default ComponentsScreen