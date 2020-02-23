import React, {Component} from 'react';
import {View, TextInput, Text, Image, Button, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';


export default function LoginScreen() {
  return(
    <View style={styles.screen}>
      <View style={ styles.container }>
        <Image
          style={{ width:null, height:null, resizeMode:'contain'}}
          source={require('../assets/images/logo-mandy.png')} />
        </View>

        <View style={{
          borderColor: 'black',
          borderWidth: 2,
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 50,
          paddingBottom: 30,
          overflow: 'hidden',
          borderRadius: 50,
          backgroundColor: Colors.santeFe
        }}>

          <View>
            <View style={{ paddingBottom: 20 }}>
            <TextInput
              style={styles.emailInput}
              placeholder='Email'
              textContentType= 'username'
              placeholderTextColor= '#D3D3D3'
            />

            <TextInput
              style={styles.passwordInput}
              placeholder='Password'
              textContentType='password'
              secureTextEntry={true}
              placeholderTextColor= '#D3D3D3'
            />

            </View>
          </View>
          <View>
            <Button
              title='Login'
              color={Colors.spanishWhite}
              />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  flex: 1,
  width: 300,
  height: 300

  },

screen: {
  top: 100,
  justifyContent: 'center',
  margin: 50
},

emailInput: {
  borderBottomWidth: 1,
  borderBottomColor:'black',
  fontSize: 18
},

passwordInput: {
  paddingTop:20,
  borderBottomWidth:1,
  borderBottomColor:'black',
  fontSize: 18
}
});
