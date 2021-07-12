import * as React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';

const FlatListScreen = () => {
  const friends = [
    {name: 'Friend #01', age: 21},
    {name: 'Friend #02', age: 22},
    {name: 'Friend #03', age: 23},
    {name: 'Friend #04', age: 24},
    {name: 'Friend #05', age: 25},
    {name: 'Friend #06', age: 26},
    {name: 'Friend #07', age: 27},
    {name: 'Friend #08', age: 28},
    {name: 'Friend #09', age: 29},
    {name: 'Friend #10', age: 30},
    {name: 'Friend #11', age: 31},
    {name: 'Friend #12', age: 32},
  ];

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Horizontal Flat List</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({item}) => {
          return <Text style={styles.textSubStyle}>{item.name}</Text>;
        }}
      />
      <Text style={styles.textStyle}>Vertical Flat List</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({item}) => {
          return (
            <Text style={styles.textSubStyle}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 20,
  },
  textStyle: {
    fontSize: 30,
  },
  textSubStyle: {
    fontSize: 23,
    margin: 10,
  },
});

export default FlatListScreen;
