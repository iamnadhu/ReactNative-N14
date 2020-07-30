import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('My First App!');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {outputText}
      </Text>

      <Button
        title='Submit'
        onPress={() =>
          setOutputText('Welcome to React Native!')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#FF0000'
  }
});