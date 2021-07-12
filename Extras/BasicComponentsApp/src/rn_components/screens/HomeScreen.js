import * as React from 'react';

import {View, Button, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Button
        title="Click this Button"
        onPress={() => console.warn('Button Pressed!')}
      />
      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={() => console.warn('Touchable Opacity Pressed!')}>
        <Text style={styles.textStyle}> Press this Touchable Opacity 1 </Text>
        <Text style={styles.textStyle}> Press this Touchable Opacity 2 </Text>
        <Text style={styles.textStyle}> Press this Touchable Opacity 3 </Text>
      </TouchableOpacity>
      <Button
        title="Components Screen"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Flat List Screen"
        onPress={() => navigation.push('FlatList')}
      />
      <Button title="Image Screen" onPress={() => navigation.push('Image')} />
      <Button
        title="Counter Screen (Using Use State)"
        onPress={() => navigation.push('CounterUseState')}
      />
      <Button
        title="Counter Screen (Using Use Reducer)"
        onPress={() => navigation.push('CounterUseReducer')}
      />
      <Button title="Color Screen" onPress={() => navigation.push('Color')} />
      <Button
        title="Square Screen (Using Use State)"
        onPress={() => navigation.push('SquareUseState')}
      />
      <Button
        title="Square Screen (Using Use Reducer)"
        onPress={() => navigation.push('SquareUseReducer')}
      />
      <Button title="Box Screen" onPress={() => navigation.push('Box')} />
      <Button title="Login Screen" onPress={() => navigation.push('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  textStyle: {
    fontSize: 20,
    paddingLeft: 3,
    color: 'white',
  },
  touchableOpacityStyle: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 10,
    marginLeft: 5,
  },
});

export default HomeScreen;
