import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    // console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    // console.log(id);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {result.name}
            </Text>

            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 4,
        marginBottom: 15
    }
});

export default ResultsShowScreen;