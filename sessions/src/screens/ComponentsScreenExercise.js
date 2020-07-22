import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreenExercise = () => {

    const myName = 'Nadhu';

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}> Components Exercise! </Text>

            <Text style={styles.text}> Getting started with React Native. </Text>

            <Text style={styles.textSub}> My name is {myName} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    textHeader: {
        fontSize: 25,
        marginBottom: 10
    },
    text: {
        fontSize: 20
    },
    textSub: {
        fontSize: 15
    }
});

export default ComponentsScreenExercise