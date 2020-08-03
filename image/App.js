import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetails from './components/ImageDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image</Text>

      <ImageDetails
        title='Forest'
        imageSource={require('./assets/forest.jpg')}
        score={9}
      />

      <ImageDetails
        title='Beach'
        imageSource={require('./assets/beach.jpg')}
        score={7}
      />

      <ImageDetails
        title='Mountain'
        imageSource={require('./assets/mountain.jpg')}
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20
  },
  text: {
    fontSize: 25,
    marginBottom: 10
  }
});