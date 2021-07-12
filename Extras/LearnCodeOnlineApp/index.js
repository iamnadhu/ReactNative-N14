import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import HelloWorld from './src/screens/HelloWorld';
import BGChanger from './src/screens/BGChanger';
import DiceRoller from './src/screens/DiceRoller';
import SpanishNumber from './src/screens/SpanishNumber';
import Currency from './src/screens/Currency';
import ProfilePic from './src/screens/ProfilePic';
import TicTacGame from './src/screens/TicTacGame';
import NetflixStore from './src/screens/NetflixStore/Main';

import UserAPI from './src/screens/UserAPI';

AppRegistry.registerComponent(appName, () => NetflixStore);
