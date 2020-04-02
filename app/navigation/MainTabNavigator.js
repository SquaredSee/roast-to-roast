import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { faMapMarkerAlt, faCoffee, faTint } from '@fortawesome/free-solid-svg-icons';

import TabBarIcon from '../components/TabBarIcon';
import Login from '../screens/Login';
import Brew from '../screens/Brew';
import NewTaste from '../screens/NewTaste';
import Taste from '../screens/Taste';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

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
    <TabBarIcon icon={faCoffee} />
  ),
};

TasteStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: Login,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Find',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon icon={faMapMarkerAlt} />
  ),
};

HomeStack.path = '';

const BrewStack = createStackNavigator(
  {
    Brew: Brew,

  },
  config
);

BrewStack.navigationOptions = {
  tabBarLabel: 'Brew',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon icon={faTint} />
  ),
};

BrewStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TasteStack,
  BrewStack,
});

tabNavigator.path = '';

export default tabNavigator;
