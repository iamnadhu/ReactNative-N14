import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Color! </Text>

            <Button
                title='Add a Color'
                onPress={() => {
                    setColors([...colors, randomRGB()]);
                }}
            />

            <View style={{
                height: 100,
                width: 100,
                marginBottom: 10,
                backgroundColor: 'rgb(0, 0, 255)'
            }} />

            <FlatList
                keyExtractor={(item) => { item }}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{
                        height: 100,
                        width: 100,
                        backgroundColor: item
                    }} />
                }}
            />
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    text: {
        fontSize: 25,
        marginBottom: 10
    }
});

export default ColorScreen