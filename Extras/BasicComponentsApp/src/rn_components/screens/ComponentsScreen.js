import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
  const myself = 'I am Nadhu';
  const number = 14;
  const arrayNumber = [72934, 51396];
  const arrayNames = ['Friend #1', 'Friend #2'];
  const hello = <Text> Nadir Shah! </Text>;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Welcome to React Native!</Text>
      <View style={styles.containerSubStyle}>
        <Text style={styles.textSubStyle}> React Native Components! </Text>
        <Text style={{fontSize: 20}}> Hi there! {myself}</Text>
        <Text> Favorite Numbers: {number} </Text>
        <Text> Phone: {arrayNumber} </Text>
        <Text> Friends: {arrayNames} </Text>
        {hello}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSubStyle: {
    backgroundColor: '#ccc',
    margin: 10,
    alignItems: 'flex-start',
    borderRadius: 15,
    padding: 15,
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 10,
    color: '#FF0000',
  },
  textSubStyle: {
    fontSize: 25,
    color: '#0000FF',
  },
});

export default ComponentsScreen;
