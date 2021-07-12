import * as React from 'react';

import {View, Text, Button, Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function LogoTitle() {
  return (
    // <Image
    //   style={logoStyles.image}
    //   source={{
    //     uri: 'https://randomuser.me/api/portraits/men/52.jpg',
    //   }}
    // />
    <Image
      style={logoStyles.image}
      source={require('../navigations-format1/assets/ic_react.png')}
    />
  );
}

function HomeScreen({navigation}) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <Button onPress={() => setCount((c) => c + 1)} title="Count +" />
          <Button onPress={() => setCount((c) => c - 1)} title="Count -" />
        </View>
      ),
      // headerRight: () => (
      //   <View>
      //     <Button onPress={() => setCount((c) => c + 1)} title="Count +" />
      //     <Button onPress={() => setCount((c) => c - 1)} title="Count -" />
      //   </View>
      // ),
    });
  }, [navigation, setCount]);

  let data = {
    name: 'Nadir Shah',
    email: 'nadhu014@gmail.com',
    address: 'India',
    count: count,
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.text}>Home Screen</Text>
      <Button
        title="My Profile"
        onPress={() => navigation.push('MyProfile', data)}
      />
      <Text style={homeStyles.text}>Count: {count}</Text>
    </View>
  );
}

function MyProfileScreen({route, navigation}) {
  console.warn(route);
  console.log(route);
  let data = route.params;

  return (
    <View style={myProfileStyles.container}>
      <Text style={myProfileStyles.text}>Personal Details</Text>
      <View style={myProfileStyles.contentView}>
        <Text style={myProfileStyles.textName}>{data.name}</Text>
        <Text style={myProfileStyles.textEmail}>{data.email}</Text>
        <Text style={myProfileStyles.textAddress}>{data.address}</Text>
        <Button
          title="Change Header"
          onPress={() => {
            navigation.setOptions({title: 'Nadhu Profile'});
          }}
        />
        <Text style={myProfileStyles.text}>Current Count: {data.count}</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // title: 'My Home',
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            // headerLeft: () => (
            //   <Button
            //     // eslint-disable-next-line no-alert
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
            headerRight: () => (
              <Button
                // eslint-disable-next-line no-alert
                onPress={() => alert('Hi, This is a sample alert!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          options={({route}) => ({title: route.params.name})}
          name="MyProfile"
          component={MyProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const logoStyles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
  },
});

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#FF0000',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

const myProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 40,
  },
  contentView: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 40,
    color: '#FF0000',
  },
  textName: {
    fontSize: 40,
    color: '#00FF00',
  },
  textEmail: {
    fontSize: 30,
    color: '#0000FF',
  },
  textAddress: {
    fontSize: 20,
    color: '#FF00FF',
  },
});

export default StackNavigation;
