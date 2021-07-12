import * as React from 'react';

import {View, Image, Text, StyleSheet} from 'react-native';

const ImageDetail = ({title, imageSource, score}) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={imageSource} />
      <View style={styles.containerSubStyle}>
        <Text style={styles.textStyle1}>{title}: </Text>
        <Text style={styles.textStyle2}>Score - {score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  containerSubStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  textStyle1: {
    fontSize: 20,
    padding: 10,
    fontStyle: 'italic',
  },
  textStyle2: {
    fontSize: 20,
    padding: 10,
  },
  imageStyle: {
    height: 150,
    width: 260,
    borderRadius: 10,
  },
});

export default ImageDetail;
