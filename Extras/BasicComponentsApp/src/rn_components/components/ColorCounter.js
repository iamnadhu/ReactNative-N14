import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{color}</Text>

      <View style={styles.containerSubStyle}>
        <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
        <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  containerSubStyle: {
    margin: 10,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default ColorCounter;
