import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function TabBarIcon(props) {
  return (
    <FontAwesomeIcon
      icon={props.icon}
      size={26}
    />
  );
}
