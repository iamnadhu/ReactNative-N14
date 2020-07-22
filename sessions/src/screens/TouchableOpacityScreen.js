import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TouchableOpacityScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Touchable Opacity! </Text>

            <Text style={styles.textSub} > Press below Touchable Opacity! </Text>

            <TouchableOpacity onPress={() => console.log('Touchable Opacity Pressed!')}>
                <Text> Click Here </Text>
                <Text> Click Here </Text>
                <Text> Click Here </Text>
            </TouchableOpacity>
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
        fontSize: 15,
        marginBottom: 10
    }
});

export default TouchableOpacityScreen