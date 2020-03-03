import React, { Component } from 'react';

import { LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
import Colors from '../constants/Colors';

class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.Panel_Holder}>

        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>

          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>

          <Image
            source= {require('../assets/icons/arrowDown.png')}
            style={styles.iconStyle} />

        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <View key={key} style={styles.sub_Category_Text} >

                <Text> {item.name} </Text>

              </View>
            ))
          }

        </View>
      </View>
    );
  }
}

export default class App extends Component {

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      { //FRENCH PRESS
        expanded: false, category_Name: 'French Press', sub_Category: [
          { id: 1, name: 'Type: Steep and Press' },
          { id: 2, name: 'Total Time: ~5 minutes'},
          { id: 3, name: 'Directions:\n\n1. Warm up your empty French Press by rinsing it with very hot water. This helps maintain the temperature while brewing for best extraction.\n\n2. Measure out 56g (about 8 Tablespoons) of coffee and grind it as coarse as breadcrumbs.\n\n3. Now that your French Press is warmed up, discard the hot water and add coffee into the empty press. Start your count-up timer as soon as you add hot water. Fill it up halfway to the top saturating all the grounds, making sure that there are no dry spots.\n\n4. At 1:00, use a wooden spoon or spatula to break the top layer we call the crust. We prefer to use wood and not metal so you don’t accidentally crack the glass. Give it a good stir.\n\n5. Now, fill it all the way to the top with water. Put the top on and allow the coffee to brew without pressing it down.\n\n6. At 4:00, you are ready to press. Firmly push the press all the way down.\n\n7. Serve it up. Pour coffee into a carafe immediately to avoid over extraction. If the coffee sits on the grounds too long, it continues to extract and will become bitter. To clean the French Press, we find it easiest to add a little water to the grounds, give it a good swirl, and empty into the trash or compost bin.'}]
      },
      { //CHEMEX
        expanded: false, category_Name: 'Chemex', sub_Category: [
          { id: 1, name: 'Type: Pour Over'},
          { id: 2, name: 'Total Time: ~4 minutes'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      },
      { //AEROPRESS
        expanded: false, category_Name: 'AeroPress', sub_Category: [
          { id: 1, name: 'Type: Press' },
          { id: 2, name: 'Total Time: ~5 minutes'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      },
      { //HARIO V60
        expanded: false, category_Name: 'Hario V60', sub_Category: [
          { id: 1, name: 'Type: Pour Over' },
          { id: 2, name: 'Total Time: ~4 minutes'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      },
      { //KALITA WAVE
        expanded: false, category_Name: 'Kalita Wave', sub_Category: [
          { id: 1, name: 'Type: Pour Over' },
          { id: 2, name: 'Total Time: ~3 minutes'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      },
      { //SYPHON
        expanded: false, category_Name: 'Syphon', sub_Category: [
          { id: 1, name: 'Type: Vacuum' },
          { id: 2, name: 'Total Time: ~6 minutes'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      },
      { //COLD BREW
        expanded: false, category_Name: 'Cold Brew', sub_Category: [
          { id: 1, name: 'Type: Steep' },
          { id: 2, name: 'Total Time: 8-12 hours'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      },
      { // ESPRESSO MACHINE
        expanded: false, category_Name: 'Espresso Machine', sub_Category: [
          { id: 1, name: 'Type: Espresso' },
          { id: 2, name: 'Total Time: ~2 minutes'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      },
      { //MOKA POT
        expanded: false, category_Name: 'Moka Pot', sub_Category: [
          { id: 1, name: 'Type: Espresso' },
          { id: 2, name: 'Total Time: ~6 minutes'},
          { id: 3, name: 'Directions:\n\n1. \n\n2. \n\n3. \n\n4. \n\n5. \n\n6. \n\n7. ' }]
      }
    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: Colors.mandy,
  },

  iconStyle: {

    width: 15,
    height: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 15,
    tintColor: Colors.spanishWhite,

  },

  sub_Category_Text: {
    fontSize: 20,
    fontFamily: 'knockout46',
    color: '#000',
    padding: 10,
  },

  category_Text: {
    textAlign: 'left',
    color: Colors.spanishWhite,
    fontSize: 35,
    fontFamily: 'knockout46',
    letterSpacing: 1,
    padding: 10
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.santeFe
  },

  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }

});
