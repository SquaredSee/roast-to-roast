import React, { Component, useState } from 'react';
import { AsyncStorage, View, TextInput, Image, Button, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';


export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    props.navigation.navigate('Main');
  };

  return(
    <ImageBackground
      source={require('../assets/images/background-mandy.png')}
      style={styles.screen}
      >
      <View style={ styles.container }>
        <Image
          style={ styles.backgroundImage }
          resizeMode="contain"
          source={require('../assets/images/logo-spanishWhite.png')} />
      </View>

      <View style={[styles.login, styles.center_col]} >
        <View>
          <View style={{ paddingBottom: 20 }}>
            <TextInput
              style={styles.emailInput}
              placeholder='Email'
              textContentType= 'username'
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholderTextColor= '#D3D3D3'
            />
            <TextInput
              style={styles.passwordInput}
              placeholder='Password'
              textContentType='password'
              secureTextEntry={true}
              onChangeText={(text) => setPass(text)}
              value={pass}
              placeholderTextColor= '#D3D3D3'
            />
          </View>
        </View>
        <View>
          <Button
            title='Login'
            color={Colors.spanishWhite}
            onPress={_signInAsync}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

LoginScreen.navigationOptions = {
  header: null
};

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
    height: '100%',
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
