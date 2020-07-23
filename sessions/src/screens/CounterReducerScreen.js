import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

const CounterReducerScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Counter (using Reducer)! </Text>

            <View style={styles.containerSub}>
                <Button
                    title='Increase'
                    onPress={() => {
                        dispatch({ type: 'increment', payload: 1 });
                    }}
                />

                <Button
                    title='Decrease'
                    onPress={() => {
                        dispatch({ type: 'decrement', payload: 1 });
                    }}
                />

            </View>

            <Text style={styles.textSub}>
                Current Count: {state.count}
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

export default CounterReducerScreen