import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFirstAppScreen = () => {
    return (
        <View>
            <Text style={styles.text} > My First App! </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        margin: 10
    }
});

export default MyFirstAppScreen