import React from 'react';

import { Platform, ColorPropType } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt, faCoffee, faTint } from '@fortawesome/free-solid-svg-icons';

import Login from '../screens/Login';
import Find from '../screens/Find';
import Brew from '../screens/Brew';
import NewTaste from '../screens/NewTaste';
import Taste from '../screens/Taste';
import Colors from '../constants/Colors';

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });
const config = {
  // https://stackoverflow.com/a/45027059
  headerLayoutPreset: 'center'
};

const TasteStack = createStackNavigator(
  {
    Taste: Taste,
    NewTaste: NewTaste
  },
  config
);

TasteStack.navigationOptions = {
  tabBarLabel: 'Taste',
  tabBarIcon: ({ focused }) => (
    <FontAwesomeIcon icon={faCoffee} size={26} color={focused ? Colors.spanishWhite : 'black'} />
  )
};

TasteStack.path = '';

const FindStack = createStackNavigator(
  {
    Find: Find,
  },
  config
);

FindStack.navigationOptions = {
  tabBarLabel: 'Find',
  tabBarIcon: ({ focused }) => (
    <FontAwesomeIcon icon={faMapMarkerAlt} size={26} color={focused ? Colors.spanishWhite : 'black'} />
  )
};

FindStack.path = '';

const BrewStack = createStackNavigator(
  {
    Brew: Brew,
  },
  config
);

BrewStack.navigationOptions = {
  tabBarLabel: 'Brew',
  tabBarIcon: ({ focused }) => (
    <FontAwesomeIcon icon={faTint} size={26} color={focused ? Colors.spanishWhite : 'black'} />
  )
};

BrewStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    TasteStack,
    FindStack,
    BrewStack,
  },
  {
    initialRouteName: 'FindStack',
    tabBarOptions: {
      activeTintColor: Colors.spanishWhite,
      activeBackgroundColor: Colors.mandy,
      inactiveTintColor: 'black',
      inactiveBackgroundColor: Colors.spanishWhite,
      initialRoute: FindStack
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
