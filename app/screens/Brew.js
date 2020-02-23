import React, {Component} from 'react';
import {View, TextInput, Text, Image, Button, StyleSheet, FlatList} from 'react-native';
import Colors from '../constants/Colors';

export default function Brew() {
  return(
    <View style={styles.screen}>
      <Text style={styles.center_col}>This is Brew</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.spanishWhite
  },

  center_col: {
    alignItems:'center'

  }

});
