import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetails = ({ imageSource, title, score }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} />

            <Text style={styles.text}>
                {title}
            </Text>

            <Text style={styles.textSub}>
                Image Score - {score}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    text: {
        fontSize: 15,
        marginBottom: 3
    },
    textSub: {
        fontSize: 12,
        marginBottom: 10
    }
});

export default ImageDetails