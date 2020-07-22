import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import MyFirstAppScreen from './src/screens/MyFirstAppScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ComponentsScreenExercise from './src/screens/ComponentsScreenExercise';
import ListScreen from './src/screens/ListScreen';
import ListScreenExercise from './src/screens/ListScreenExercise';
import ButtonScreen from './src/screens/ButtonScreen';
import TouchableOpacityScreen from './src/screens/TouchableOpacityScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  MyFirstApp: MyFirstAppScreen,
  Components: ComponentsScreen,
  ComponentsExercise: ComponentsScreenExercise,
  List: ListScreen,
  ListExercise: ListScreenExercise,
  Button: ButtonScreen,
  TouchableOpacity: TouchableOpacityScreen,
  Image: ImageScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Sessions'
  }
});

export default createAppContainer(navigator);