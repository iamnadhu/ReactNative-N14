import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ComponentsScreen from './screens/ComponentsScreen';
import FlatListScreen from './screens/FlatListScreen';
import ImageScreen from './screens/ImageScreen';
import CounterUseStateScreen from './screens/CounterUseStateScreen';
import CounterUseReducerScreen from './screens/CounterUseReducerScreen';
import ColorScreen from './screens/ColorScreen';
import SquareUseStateScreen from './screens/SquareUseStateScreen';
import SquareUseReducerScreen from './screens/SquareUseReducerScreen';
import BoxScreen from './screens/BoxScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: 'RN Components',
          headerStyle: {
            backgroundColor: '#FF0000',
            height: 120,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen
          name="CounterUseState"
          component={CounterUseStateScreen}
        />
        <Stack.Screen
          name="CounterUseReducer"
          component={CounterUseReducerScreen}
        />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="SquareUseState" component={SquareUseStateScreen} />
        <Stack.Screen
          name="SquareUseReducer"
          component={SquareUseReducerScreen}
        />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
