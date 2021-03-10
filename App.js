/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { colors } from 'react-native-elements';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeContainer, BigStoreContainer, SmallStoreContainer } from './containers';
// const App: () => React$Node = () => {
//   return (
//     <MainContainer/>
//   );
// };

const RootStack = createStackNavigator(
  {
    Home: {screen : HomeContainer,
      navigationOptions: () => ({
        title: `▷ 고추시세`,
        headerStyle: styles.headerTitle,
        headerTintColor: colors.white
      }),
    },
    BigStore: {screen : BigStoreContainer,
      navigationOptions: () => ({
        title: `뒤로가기`,
        headerStyle: styles.headerTitle,
        headerTintColor: colors.white
      }),
    },
    SmallStore: {screen : SmallStoreContainer,
      navigationOptions: () => ({
        title: `뒤로가기`,
        headerStyle: styles.headerTitle,
        headerTintColor: colors.white
      }),
    }
  },
  {
    initialRouteName: 'Home',
  }
  
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }

}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  headerTitle: {
    backgroundColor: "#E70012",
  }
});