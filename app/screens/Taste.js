import React, { Component } from 'react';

import { LayoutAnimation, View, Text, Image, StyleSheet, Button } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import ExpandableListView from '../components/ExpandableList';

import Colors from '../constants/Colors';

const objectToQueryString = (obj) => {
  return Object.keys(obj).map((key) => key + '=' + obj[key]).join('&');
};

export default class TasteNotes extends Component {

  constructor(props) {
    super(props);
    this.getLogs = this.getLogs.bind(this);
    this.state = { logs: [] };
  }

  getLogs() {

    let q = '';
    q = '?' + objectToQueryString({user_id: 1});  // TODO: Add authentication?

    fetch(`http://192.168.1.4:3000/logs${q}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        this.setState({ logs: this.buildLogList(data) });
      }
    })
    .catch((e) => console.error(e));
  }

  buildLogList(data) {
    return data.map((log) => ({
      expanded: false,
      categoryName: log.coffee,
      subCategory: [
        { text: <Text style={styles.subCategoryText}>{`${log.date}`}</Text> },
        { text: <Text style={styles.subCategoryBody}>{`${log.tasting_note_1}`}</Text> }
      ]
    }));
  }

  componentDidMount() {
    this.getLogs();
  }

  updateLayout(index) {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.logs];

    array[index].expanded = !array[index].expanded;

    this.setState(() => {
      return {
        logs: array
      };
    });
  }

  render() {
    let logList = this.state.logs.map((log, key) => (
      <ExpandableListView key={log.id} item={log} onClickFunction={this.updateLayout.bind(this, key)} />
    ));

    if (logList.length === 0) {
      logList = <Text>No Logs available</Text>;
    }

    return(
      <View style={styles.container}>
        <View style={styles.createButtonContainer}>
          <Text style={ styles.addNewText}>Add New</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('NewTaste')}>
            <Image source={require('../assets/icons/plusButton.png')} style={{width: 40, height: 40}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.noteListContainer}>
          <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            {logList}
          </ScrollView>
        </View>
      </View>
    );
  }
}

TasteNotes.navigationOptions = {
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
    // alignItems: 'center',
    // justifyContent:'flex-start',
  },

  addNewText: {
    paddingRight: 5,
    fontFamily: 'knockout46',
    fontSize:30,
    letterSpacing:1,
    textAlign:'center',
    color: Colors.spanishWhite
  },

  subCategoryBody: {
    fontSize: 13,
    fontFamily: 'Arial',
    color: Colors.spanishWhite,
    padding: 10,
    backgroundColor: Colors.santeFe,
  },

  subCategoryText: {
    fontSize: 15,
    fontFamily: 'Arial',
    color: Colors.spanishWhite,
    padding: 5,
    backgroundColor: Colors.santeFe,
    fontWeight: 'bold',
  }
});
