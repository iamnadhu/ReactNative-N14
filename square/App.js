import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import SquareUseStateScreen from './src/screens/SquareUseStateScreen';
import SquareReducerScreen from './src/screens/SquareReducerScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  square1: SquareUseStateScreen,
  square2: SquareReducerScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Square'
  }
});

export default createAppContainer(navigator);
