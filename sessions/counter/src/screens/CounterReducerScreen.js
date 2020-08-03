import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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
            <Text style={styles.text}> Counter (Using useReducer)! </Text>

            <View style={styles.containerSub}>
                <Button
                    title='Increase +'
                    onPress={() => {
                        dispatch({ type: 'increment', payload: 1 });
                    }}
                />

                <Button
                    title='Decrease -'
                    onPress={() => {
                        dispatch({ type: 'decrement', payload: 1 });
                    }}
                />
            </View>

            <Text style={styles.textSub1}>
                Current Count
      </Text>

            <Text style={styles.textSub2}>
                {state.count}
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

export default CounterReducerScreen