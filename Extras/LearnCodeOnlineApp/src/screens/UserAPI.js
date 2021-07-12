import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';

import Axios from 'axios';
import {Button} from 'native-base';

import User from '../components/User';
// const key = "some random key with number";
// const URL = 'https://randomuser.me/api/${key}/params';

const UserAPI = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      const details = data.results[0];
      setDetails(details);
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <User details={details} />
          <Button rounded style={styles.button} onPress={() => fetchDetails()}>
            <Text style={styles.text}>New User</Text>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default UserAPI;
