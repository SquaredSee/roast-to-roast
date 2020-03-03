import React, {Component} from 'react';
import {View, TextInput, Text, Image, Button, StyleSheet, ImageBackground, Alert, TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/Colors';


export default function LoginScreen() {
  return(
    <ImageBackground
      source={require('../assets/images/background-mandy.png')}
      style={[{width: '100%', height: '100%'}, styles.screen]}
      >
      <View style={ styles.container }>
        <Image
          style={ styles.backgroundImage }
          resizeMode="contain"
          source={require('../assets/images/logo-spanishWhite.png')} />
      </View>

      <View style={[styles.login, styles.center_col]}>

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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  center_col: {
    width: '80%',
    marginLeft: '10%'
  },

  container: {
    alignItems: 'center',
    height: 225,
  },

  screen: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },


  login: {
    borderColor: Colors.black,
    borderWidth: 1.5,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
    paddingBottom: 30,
    overflow: 'hidden',
    borderRadius: 50,
    backgroundColor: Colors.santeFe,
  },

  emailInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    fontSize: 28,
    fontFamily: 'knockout46',
    letterSpacing: 2
  },

  passwordInput: {
    paddingTop:20,
    borderBottomWidth:1,
    borderBottomColor: Colors.black,
    fontSize: 28,
    fontFamily: 'knockout46',
    letterSpacing: 2
  }
});
