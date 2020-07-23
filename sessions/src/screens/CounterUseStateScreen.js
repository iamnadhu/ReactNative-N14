import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterUseStateScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Counter (Using useState)! </Text>

            <View style={styles.containerSub}>
                <Button
                    title='Increase'
                    onPress={() => {
                        setCounter(counter + 1);
                    }}
                />

                <View />

                <Button
                    title='Decrease'
                    onPress={() => {
                        setCounter(counter - 1);
                    }}
                />
            </View>

            <Text style={styles.textSub}>
                Current Count: {counter}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    containerSub: {
        margin: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        marginBottom: 10
    },
    textSub: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10
    }
});

export default CounterUseStateScreen