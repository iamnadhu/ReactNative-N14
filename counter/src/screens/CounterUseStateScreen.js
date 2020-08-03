import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterUseStateScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Counter (Using useState)! </Text>

            <View style={styles.containerSub}>
                <Button
                    title='Increase +'
                    onPress={() => {
                        setCounter(counter + 1);
                    }}
                />

                <Button
                    title='Decrease -'
                    onPress={() => {
                        setCounter(counter - 1);
                    }}
                />
            </View>

            <Text style={styles.textSub1}>
                Current Count
      </Text>

            <Text style={styles.textSub2}>
                {counter}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 20,
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },
    containerSub: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        marginBottom: 10
    },
    textSub1: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10
    },
    textSub2: {
        fontSize: 35,
        marginBottom: 10
    }
});

export default CounterUseStateScreen