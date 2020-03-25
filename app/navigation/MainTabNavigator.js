import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { faMapMarkerAlt, faCoffee, faTint } from '@fortawesome/free-solid-svg-icons';

import TabBarIcon from '../components/TabBarIcon';
//import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Brew from '../screens/Brew';
import NewTaste from '../screens/NewTaste';
import LinksScreen from '../screens/LinksScreen';
//import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Login,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Taste',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon icon={faCoffee} />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Find',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon icon={faMapMarkerAlt} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: Brew,
    NewTaste: NewTaste
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Brew',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon icon={faTint} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
