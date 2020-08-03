import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerSub}>
                <Text style={{ fontSize: 15 }}> 01. </Text>
                <Button
                    title='Square (Using useState)'
                    onPress={() => navigation.navigate('square1')}
                />
            </View>

            <View style={styles.containerSub}>
                <Text style={{ fontSize: 15 }}> 02. </Text>
                <Button
                    title='Square (Using useReducer)'
                    onPress={() => navigation.navigate('square2')}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1
    },
    containerSub: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
});

export default HomeScreen