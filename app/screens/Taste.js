import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function tasteNotes(props){
  return(
    <View style={styles.container}>
      <View style={styles.create_button_container}>
        <Text style={{ paddingRight:5 ,fontFamily: 'knockout46', fontSize:20, letterSpacing:1, textAlign:'center' }}>Add New</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('NewTaste')}>
          <Image source={require('../assets/icons/plusButton.png')} style={{width: 40, height: 40}}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.note_list_container}>
        <Text>Testing</Text>
        <Text>This</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:2,
    justifyContent: 'center',
    backgroundColor: Colors.mandy
  },

  create_button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    padding: 10,
  },

  note_list_container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'flex-start'
  },




});
