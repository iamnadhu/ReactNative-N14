import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const ExploreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Screen</Text>
      <Button
        title="Go to profile screen"
        onPress={() => navigation.navigate('Profile')}
      />
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

export default ExploreScreen;
