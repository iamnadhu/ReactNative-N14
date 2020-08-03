import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Button & Touchable Opacity </Text>

      <Text style={styles.textSub1}> Press below Button! </Text>

      <Button
        title='Click Here'
        onPress={() => console.log('Button Pressed!')}
      />

      <Text style={styles.textSub1}> Press below Touchable Opacity! </Text>

      <TouchableOpacity onPress={() => console.log('Touchable Opacity Pressed!')}>
        <Text> Click Here </Text>
        <Text> Click Here </Text>
        <Text> Click Here </Text>
      </TouchableOpacity>

      <Text style={styles.textSub3}> Press Submit & Reset </Text>

      <View style={styles.containerSub}>
        <Button
          title='Submit'
          onPress={() =>
            setOutputText('Submit Success!')
          }
        />

        <TouchableOpacity onPress={() => setOutputText('')}>
          <Text> Reset </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textSub4}> {outputText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20
  },
  containerSub: {
    flexDirection: 'row',
    alignItems: "center",
    alignSelf: 'center'
  },
  text: {
    fontSize: 25,
    marginBottom: 10
  },
  textSub1: {
    fontSize: 15,
    marginBottom: 10
  },
  textSub2: {
    fontSize: 15,
    marginBottom: 10
  },
  textSub3: {
    fontSize: 20,
    marginTop: 40,
    alignItems: "center",
    alignSelf: 'center'
  },
  textSub4: {
    fontSize: 20,
    marginTop: 20,
    alignItems: "center",
    alignSelf: 'center'
  }
});