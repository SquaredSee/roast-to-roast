import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Colors from '../constants/Colors';

export default function Brew() {
  const [brewer] = useState([
    {name: 'French Press', type:'Steep & Press' ,key: '1'},
    {name: 'Chemex', type: 'Steep & Press', key: '2'},
    {name: 'AeroPress', type: 'Press' , key: '3'},
    {name: 'Hario V60', type: 'Pour over' , key: '4'},
    {name: 'Kalita Wave', type: 'Pour over' , key: '5'},
    {name: 'Clever Dripper', type: 'Pour over & Steep' , key: '6'},
    {name: 'Syphon', type: 'Vacuum' , key: '7'},
    {name: 'Cold Brew', type: 'Steep' , key: '8'},
    {name: 'Espresso Machine', type: 'Espresso' , key: '9'},
    {name: 'Moka Pot', type: 'Espresso' , key: '10'},
  ]);
  return(
    <View style={styles.screen}>
      <Text style={styles.topPageText}>Choose a Brewing Method Below</Text>
      <Text style={styles.topPageText}>Tap to see the recipe</Text>
      <FlatList
        data={brewer}
        renderItem={({ item, separators }) => (
          <Text style={styles.listItem}>{item.name} - {item.type}</Text>
        )}
      />
    </View>


  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.spanishWhite,
  },

  listItem: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 25,
    backgroundColor: Colors.santeFe,
    fontFamily: 'knockout46'
  },

  topPageText: {
    alignContent: 'center'
  }

});
