/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import StackNavigation from './src/screens/StackNavigation';
import TabNavigation from './src/screens/TabNavigation';
import DrawerNavigation from './src/screens/DrawerNavigation';

AppRegistry.registerComponent(appName, () => StackNavigation);
