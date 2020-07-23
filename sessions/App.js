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
import CounterUseStateScreen from './src/screens/CounterUseStateScreen';
import CounterReducerScreen from './src/screens/CounterReducerScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareUseStateScreen from './src/screens/SquareUseStateScreen';
import SquareReducerScreen from './src/screens/SquareReducerScreen';
import LoginScreen from './src/screens/LoginScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  MyFirstApp: MyFirstAppScreen,
  Components: ComponentsScreen,
  ComponentsExercise: ComponentsScreenExercise,
  List: ListScreen,
  ListExercise: ListScreenExercise,
  Button: ButtonScreen,
  TouchableOpacity: TouchableOpacityScreen,
  Image: ImageScreen,
  CounterUseState: CounterUseStateScreen,
  CounterReducer: CounterReducerScreen,
  Color: ColorScreen,
  SquareUseState: SquareUseStateScreen,
  SquareReducer: SquareReducerScreen,
  Login: LoginScreen,
  Box: BoxScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Sessions'
  }
});

export default createAppContainer(navigator);