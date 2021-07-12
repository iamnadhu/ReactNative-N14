import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

// import App from './src/rn_components/App';
// import StackNavigation from './src/rn-navigations/navigations-format1/StackNavigation';
// import TabNavigation from './src/rn-navigations/navigations-format1/TabNavigation';
// import DrawerNavigation from './src/rn-navigations/navigations-format1/DrawerNavigation';
// import StackNavigation from './src/rn-navigations/navigations-format2/StackNavigation';
// import DrawerNavigation from './src/rn-navigations/navigations-format2/DrawerNavigation';
// import TabNavigation from './src/rn-navigations/navigations-format2/BottomTabNavigation';
// import App from './src/rn-project/App';
import App from './src/rn-authentication/App';

AppRegistry.registerComponent(appName, () => App);
