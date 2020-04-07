import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';

export default function tasteNotes(props){
  return(
    <View style={styles.container}>
      <View style={styles.createButtonContainer}>
        <Text style={ styles.addNewText}>Add New</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('NewTaste')}>
          <Image source={require('../assets/icons/plusButton.png')} style={{width: 40, height: 40}}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.noteListContainer}>
        <Text>Your Notes</Text>
        <ScrollView>
          <Text>Testing</Text>
        </ScrollView>
      </View>
    </View>
  );
}

tasteNotes.navigationOptions = {
  headerTitle: 'Taste',
  headerTitleStyle: {
    fontFamily: 'knockout46',
    fontSize: 60,
    alignItems: 'center',
    color: Colors.spanishWhite,
  },
  headerStyle: {
    backgroundColor: Colors.mandy,
  },
  headerTitleContainerStyle: {
    height: 70 //trying to enlarge the header box size
  },
  headerStatusBarHeight: 50 //trying to rid of the small semi-tanslucent bar
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: Colors.mandy,
    padding: 10
  },

  createButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    padding: 10,
  },

  noteListContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent:'flex-start',
  },

  addNewText: {
    paddingRight: 5,
    fontFamily: 'knockout46',
    fontSize:30,
    letterSpacing:1,
    textAlign:'center',
    color: Colors.spanishWhite
  }
});
