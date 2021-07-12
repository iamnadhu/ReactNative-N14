import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Add from './Add';
import Edit from './Edit';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {backgroundColor: '#0F4C75'},
            title: 'LCO Netflix App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00B7C2',
            },
          }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerStyle: {backgroundColor: '#0F4C75'},
            title: 'LCO Netflix App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00B7C2',
            },
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerStyle: {backgroundColor: '#0F4C75'},
            title: 'LCO Netflix App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00B7C2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
