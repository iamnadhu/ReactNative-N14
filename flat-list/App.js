import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const friends = [
    { name: 'Friend 1', age: 21 },
    { name: 'Friend 2', age: 22 },
    { name: 'Friend 3', age: 23 },
    { name: 'Friend 4', age: 24 },
    { name: 'Friend 5', age: 25 },
    { name: 'Friend 6', age: 26 },
    { name: 'Friend 7', age: 27 },
    { name: 'Friend 8', age: 28 },
    { name: 'Friend 9', age: 29 },
    { name: 'Friend 10', age: 30 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flat List</Text>

      <FlatList
        // Scroll Vertically / Horizontally
        vertical

        // Hide / Show Vertical / Horizontal Scroll Indicator
        showsHorizontalScrollIndicator={false}

        keyExtractor={friend => friend.name}

        data={friends}

        renderItem={({ item }) => {
          return (
            <Text style={styles.textSub}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20
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