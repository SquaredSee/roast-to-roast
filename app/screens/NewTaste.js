import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';

import t from 'tcomb-form-native';
import { ScrollView } from 'react-native-gesture-handler';

const Form = t.form.Form;

const LogModel = t.struct({
  // date: t.Date,
  shop_name: t.String,
  coffee: t.String,
  origin: t.maybe(t.String),
  tasting_note_1: t.String,
  tasting_note_2: t.maybe(t.String),
  tasting_note_3: t.maybe(t.String),
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
};

const options = {
  fields: {
    date: {
      error: 'Please enter a valid date',
      mode: 'date',
    },
    shop_name: {
      error: 'Enter the shop you got the coffee from'
    },
    coffee: {
      error: 'Please enter the name of the coffee or drink you tried',
    },
    tasting_note1: {
      label: 'Tasting Note 1',
      error: 'Enter at least one thought or a flavor note about the drink'
    },
    tasting_note2: {
      label: 'Tasting Note 2'
    },
    tasting_note3: {
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

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: null };
  }

  handleSubmit() {
    // const validate = t.validate(this.state.value, LogModel);

    // TODO: get rid of deprecated ref
    const formData = this.refs.form.getValue();
    if (formData) {
      fetch('http://192.168.1.4:3000/logs', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          user_id: 1  // TODO: Add authentication?
        })
      })
      .then((res) => {
        if (res.status === 200) {
          this.props.navigation.navigate('Taste');
        }
        else {
          // ERROR!
        }
        console.log(res.status);
      })
      .catch((e) => {
        console.log(e);
      });
    }
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='handled'>
          <Form
            ref='form'
            style={styles.fieldText}
            type={LogModel}
            value={this.state.value}
            options={options}
            onChange={this.handleChange}
          />
          <Button
            color={Colors.spanishWhite}
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
    color: Colors.spanishWhite
  },
  headerStyle: {
    backgroundColor: Colors.mandy,
  },
  headerTitleContainerStyle: {
    height: 60,
    backgroundColor: Colors.mandy
  },
  headerLeftContainerStyle: {
    height: 60,
    backgroundColor: Colors.mandy
  },
  headerRightContainerStyle: {
    width: '20%',
    height: 60,
    backgroundColor: Colors.mandy
  },
  headerRight: () => <View></View>,
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
  }
});
