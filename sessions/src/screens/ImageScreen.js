import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreenExercise = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Image! </Text>

            <ImageDetail
                title='Forest'
                imageSource={require('../../assets/forest.jpg')}
                score={9}
            />

            <ImageDetail
                title='Beach'
                imageSource={require('../../assets/beach.jpg')}
                score={7}
            />

            <ImageDetail
                title='Mountain'
                imageSource={require('../../assets/mountain.jpg')}
                score={10}
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
    }
});

export default ImageScreenExercise