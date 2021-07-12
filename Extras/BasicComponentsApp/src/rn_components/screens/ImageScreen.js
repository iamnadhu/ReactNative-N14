import * as React from 'react';

import {View, StyleSheet} from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <ImageDetail
        title="Forest"
        imageSource={require('../assets/forest.jpg')}
        score={14}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../assets/beach.jpg')}
        score={5}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../assets/mountain.jpg')}
        score={19}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 20,
  },
});

export default ImageScreen;
