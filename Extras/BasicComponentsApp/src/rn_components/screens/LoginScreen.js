import * as React from 'react';

import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const LoginScreen = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.text1Style}>Login</Text>
      <View style={styles.containerStyle}>
        <Text style={styles.textSub1Style}>Enter your Name:</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(newValue) => setName(newValue)}
        />
      </View>
      <View style={styles.containerStyle}>
        <Text style={styles.textSub1Style}>Enter your Password:</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 4 ? (
          // eslint-disable-next-line react-native/no-inline-styles
          <Text style={{marginLeft: 10}}>
            {' '}
            *** Password must be 4 characters{' '}
          </Text>
        ) : null}
      </View>
      <View style={styles.containerSub2Style}>
        <Text style={styles.text2Style}>Profile Details</Text>
        <Text style={styles.textSub2Style}>Name: {name}</Text>
        <Text style={styles.textSub2Style}>Password: {password}</Text>
      </View>
      <View style={styles.containerSub1Style}>
        <Button
          style={styles.buttonStyle}
          title="Reset"
          onPress={() => {
            // eslint-disable-next-line no-sequences
            setName(''), setPassword('');
          }}
        />
        <Button
          style={styles.buttonStyle}
          title="Submit"
          // eslint-disable-next-line no-alert
          onPress={() => alert('Success!')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 10,
  },
  containerSub1Style: {
    margin: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  containerSub2Style: {
    margin: 20,
    flexDirection: 'column',
    height: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgb(0, 0, 255)',
  },
  buttonStyle: {
    marginHorizontal: 20,
  },
  text1Style: {
    fontSize: 30,
    alignSelf: 'center',
  },
  text2Style: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    marginBottom: 20,
  },
  textSub1Style: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  textSub2Style: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
    color: 'white',
  },
  inputStyle: {
    marginHorizontal: 10,
    borderColor: 'black',
    fontSize: 30,
    borderWidth: 1,
  },
});

export default LoginScreen;
