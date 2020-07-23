import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textSub}> {color} </Text>

            <View style={styles.containerSub}>
                <Button
                    title={`Increase ${color}`}
                    onPress={() => onIncrease()}
                />

                <Button
                    title={`Decrease ${color}`}
                    onPress={() => onDecrease()}
                />
            </View>
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
    }
});

export default ColorCounter