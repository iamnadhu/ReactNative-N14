import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSub1}>
        <Text style={styles.text}>Child #1</Text>
        <Text style={styles.text}>Child #2</Text>
        <Text style={styles.text}>Child #3</Text>
      </View>

      <View style={styles.containerSub2}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textTwo}>Child #2</Text>
        <Text style={styles.textThree}>Child #3</Text>
        <Text style={styles.textFour}>Child #4</Text>
        <Text style={styles.textFive}>Child #5</Text>
      </View>

      <View style={styles.containerSub3}>
        <View style={styles.containerSub4} />
        <View style={styles.containerSub5} />
        <View style={styles.containerSub6} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: 'column'
  },
  containerSub1: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'stretch',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'center'
  },
  containerSub3: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerSub4: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  containerSub5: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },
  containerSub6: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'red',
    margin: 20
  },
  containerSub2: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    height: 200
  },
  textOne: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1
  },
  textTwo: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1
  },
  textThree: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center'
  },
  textFour: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'flex-start',
    flex: 1
  },
  textFive: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute'
  }
});