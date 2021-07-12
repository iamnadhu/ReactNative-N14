import * as React from 'react';

import {View, Button, Text, StyleSheet} from 'react-native';

const CounterUseStateScreen = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.containerSubStyle}>
        <Button
          title="Increase +"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <Button
          title="Decrease -"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
      </View>
      <Text style={styles.textSub1Style}>Current Count</Text>
      <Text style={styles.textSub2Style}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 50,
    marginHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerSubStyle: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 25,
    marginBottom: 10,
  },
  textSub1Style: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  textSub2Style: {
    fontSize: 35,
    marginBottom: 10,
  },
});

export default CounterUseStateScreen;
