import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <View style={styles.container}>
        <Text style={styles.textSub}>
          Enter your Name:
        </Text>

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={newValue => setName(newValue)}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.textSub}>
          Enter your Password:
        </Text>

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={newValue => setPassword(newValue)}
        />

        {password.length < 4 ? <Text style={{ marginLeft: 10 }}> *** Password must be 4 characters </Text> : null}
      </View>

      <View style={styles.containerSub1}>
        <Button
          style={styles.button}
          title='Sign Up'
          onPress={() => console.log('Sign Up Pressed!')}
        />

        <Button
          style={styles.button}
          title='Sign In'
          onPress={() => console.log('Sign In Pressed!')}
        />
      </View>

      <View style={styles.containerSub2}>
        <Text style={styles.text}>Profile Details</Text>

        <Text style={styles.textSub}>
          Name: {name}
        </Text>

        <Text style={styles.textSub}>
          Password: {password}
        </Text>
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
    flexDirection: 'row',
    alignSelf: 'center'
  },
  containerSub2: {
    margin: 10,
    flexDirection: 'column',
    height: 300,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 0, 0)'
  },
  button: {
    marginHorizontal: 20
  },
  text: {
    fontSize: 30,
    alignSelf: 'center'
  },
  textSub: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10
  },
  input: {
    marginHorizontal: 10,
    borderColor: 'black',
    fontSize: 30,
    borderWidth: 1
  }
});