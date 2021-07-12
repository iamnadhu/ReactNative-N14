import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const SupportScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Support Screen (Auth)</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default SupportScreen;
