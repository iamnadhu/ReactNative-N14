import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const HelloWorld = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <Text style={styles.text}>Hello World !</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#FF0000',
  },
});

export default HelloWorld;
