import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const myself = 'I am Nadhu';
  const number = 14;
  const arrayNumber = [72934, 51396];
  const arrayNames = ['Friend #1', 'Friend #2'];
  const hello = <Text> Nadir Shah! </Text>

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native!</Text>

      <View>
        <Text style={styles.textSub}> React Native Components! </Text>
        <Text style={{ fontSize: 20 }}> Hi there! {myself}</Text>
        <Text> Favourite Numbers: {number} </Text>
        <Text> Phone: {arrayNumber} </Text>
        <Text> Friends: {arrayNames} </Text>
        {hello}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSub: {
    backgroundColor: '#ccc',
    margin: 10,
    alignItems: 'flex-start'
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    color: '#FF0000'
  },
  textSub: {
    fontSize: 25,
    color: '#0000FF'
  }
});
