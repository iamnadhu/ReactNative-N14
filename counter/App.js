import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import CounterUseStateScreen from './src/screens/CounterUseStateScreen';
import CounterReducerScreen from './src/screens/CounterReducerScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  counter1: CounterUseStateScreen,
  counter2: CounterReducerScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Counter'
  }
});

export default createAppContainer(navigator);