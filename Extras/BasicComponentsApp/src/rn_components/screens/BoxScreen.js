import * as React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.containerSub1Style}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
        <Text style={styles.textStyle}>Child #3</Text>
      </View>
      <View style={styles.containerSub2Style}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
        <Text style={styles.textFourStyle}>Child #4</Text>
        <Text style={styles.textFiveStyle}>Child #5</Text>
      </View>
      <View style={styles.containerSub3Style}>
        <View style={styles.containerSub4Style} />
        <View style={styles.containerSub5Style} />
        <View style={styles.containerSub6Style} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: 'column',
  },
  containerSub1Style: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'stretch',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'center',
  },
  containerSub2Style: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  containerSub3Style: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerSub4Style: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  containerSub5Style: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  containerSub6Style: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  textStyle: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'red',
    margin: 20,
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
  },
  textFourStyle: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'flex-start',
    flex: 1,
  },
  textFiveStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
});

export default BoxScreen;
