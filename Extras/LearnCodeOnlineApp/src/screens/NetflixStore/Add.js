import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const Add = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Add !</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});

export default Add;
