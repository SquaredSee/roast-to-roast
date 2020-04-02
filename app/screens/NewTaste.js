import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';

import t from 'tcomb-form-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle, HeaderBackButton, headerStyle } from 'react-navigation-stack';

const Form = t.form.Form;

const NewEntry = t.struct({
  date: t.Date,
  shopName: t.String,
  coffeeName: t.String,
  origin: t.maybe(t.String),
  tastingNote1: t.String,
  tastingNote2: t.maybe(t.String),
  tastingNote3: t.maybe(t.String),
  rating: t.Number
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      backgroundColor: Colors.santeFe,
      padding: 10,
    },
  },
  controlLabel: {
    normal: {
      color: Colors.spanishWhite,
      fontSize: 35,
      letterSpacing: 1,
      marginBottom: 7,
      fontFamily: 'knockout46'
    },
    // the style applied when a validation error occours
    error: {
      color: '#ed7d31',
      fontFamily: 'knockout46',
      fontSize: 35,
      letterSpacing: 1,
      padding: 10,
      backgroundColor: Colors.santeFe,
      marginBottom: 10
    }
  }
}

const options = {
  fields: {
    date: {
      error: 'Please enter a valid date',
      mode: 'date',
    },
    shopName: {
      error: 'Enter the shop you got the coffee from'
    },
    coffeeName: {
      error: 'Please enter the name of the coffee or drink you tried',
    },
    tastingNote1: {
      label: 'Tasting Note 1',
      error: 'Enter at least one thought or a flavor note about the drink'
    },
    tastingNote2: {
      label: 'Tasting Note 2'
    },
    tastingNote3: {
      label: 'Tasting Note 3'
    },
    rating: {
      error: 'Please set a rating of 1-10',
      keyboardType: 'numeric'
    },
  },
  stylesheet: formStyles,
};

export default class NewTaste extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='handled'>
          <Form
            style={styles.fieldText}
            ref={c => this._form = c}
            type={NewEntry}
            options={options}
          />
          <Button
            color = {Colors.spanishWhite}
            title="Save Log"
            onPress={this.handleSubmit}
          />
        </ScrollView>
      </View>
    );
  }
}

NewTaste.navigationOptions = {
  headerTitle: 'New Taste Log',
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
  },
  headerBackTitle: 'Cancel',
  headerBackTitleStyle: {
    fontFamily: 'knockout46',
    fontSize: 30,
    color: Colors.spanishWhite
  }


};

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    padding: 10,
    backgroundColor: Colors.mandy,
  },

  fieldText: {
    fontFamily: 'knockout46',
  },

  Btn: {
    color: Colors.spanishWhite,
  }
});
