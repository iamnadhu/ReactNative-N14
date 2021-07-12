import * as React from 'react';

import {View, Button, FlatList, StyleSheet} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = React.useState([]);
  //   console.warn(colors);

  return (
    <View style={styles.containerStyle}>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <View style={styles.containerSubStyle} />
      <FlatList
        keyExtractor={(color) => color.name}
        data={colors}
        renderItem={({item}) => {
          return (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{height: 100, width: 100, backgroundColor: item}} />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin: 20,
  },
  containerSubStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(0, 0, 255)',
  },
});

export default ColorScreen;
