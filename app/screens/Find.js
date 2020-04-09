import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

import Colors from '../constants/Colors';

export default class Find extends Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text>Testing</Text>
      </View>
    );
  }

}

Find.navigationOptions = {
  headerTitle: 'Find',
  headerTitleStyle: {
    fontFamily: 'knockout46',
    fontSize: 60,
    alignItems: 'center',
    color: Colors.spanishWhite
  },
  headerStyle: {
    backgroundColor: Colors.mandy,
  },
  headerTitleContainerStyle: {
    height: 70,
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: Colors.mandy,
  },
});
