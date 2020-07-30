import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('My First App!');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {outputText}
      </Text>

      <View style={styles.containerSub}>
        <Button
          title='Reset'
          onPress={() =>
            setOutputText('My First App!')
          }
        />

        <Button
          title='Submit'
          onPress={() =>
            setOutputText('Welcome to React Native!')
          }
        />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 30,
    color: '#FF0000'
  }
});