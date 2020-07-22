import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const ButtonScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Button! </Text>

            <Text style={styles.textSub}> Press below Button! </Text>

            <Button
                title='Click Here'
                onPress={() => console.log('Button Pressed!')}
            />
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

export default ButtonScreen