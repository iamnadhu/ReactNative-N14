import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const UpdatesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Updates Screen</Text>
      <Button
        title="Go to updates screen...again"
        onPress={() => navigation.push('Updates')}
      />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
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

export default UpdatesScreen;
