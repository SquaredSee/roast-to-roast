import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';

import Login from '../screens/Login';
import AuthLoading from '../screens/AuthLoading';

const AuthNavigator = createStackNavigator({ Login });

export default createAppContainer(
  createSwitchNavigator(
    {
      // https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoading: AuthLoading,
      Auth: AuthNavigator,
      Main: MainTabNavigator,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
