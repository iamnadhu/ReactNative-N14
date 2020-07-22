import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        { name: 'Friend #4' },
        { name: 'Friend #5' },
        { name: 'Friend #6' },
        { name: 'Friend #7' },
        { name: 'Friend #8' },
        { name: 'Friend #9' },
        { name: 'Friend #10' }
    ];

    // return <FlatList data = {friends} renderItem = {(element) => {}} />

    // return (
    //     <FlatList
    //         data = {friends} 
    //         renderItem = {(element) => {
    //             // element === { item: { name: 'Friend #1' }, index: 0 }
    //         }}
    //     />
    // );

    return (
        <View style={styles.container}>
            <Text style={styles.text}> List! </Text>

            <FlatList
                // Scroll Vertically / Horizontally
                vertical

                // Hide / Show Vertical / Horizontal Scroll Indicator
                showsHorizontalScrollIndicator={false}

                keyExtractor={friend => friend.name}

                data={friends}

                renderItem={({ item }) => {
                    // item === { name: 'Friend #1' }
                    return <Text style={styles.textSub}> {item.name} </Text>
                }}
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
    },
    textSub: {
        fontSize: 15,
        marginBottom: 10
    }
});

export default ListScreen