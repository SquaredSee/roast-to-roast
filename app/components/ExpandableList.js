import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import Colors from '../constants/Colors';

export default class ExpandableListView extends Component {

  constructor() {
    super();

    this.state = {
      layoutHeight: 0
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layoutHeight: null
        };
      });
    }
    else {
      this.setState(() => {
        return {
          layoutHeight: 0
        };
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View style={styles.panelHolder}>

        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.categoryView}>

          <Text style={styles.categoryText}>{this.props.item.categoryName} </Text>

          <FontAwesomeIcon icon={ faSortDown } style={styles.iconStyle} />
        </TouchableOpacity>

        <View style={{ height: this.state.layoutHeight, overflow: 'hidden' }}>
          {
            this.props.item.subCategory.map((item, key) => (
              <View key={key} style={styles.subCategoryText} >
                <Text>{item.name}</Text>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 15,
    height: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 15,
    color: Colors.spanishWhite,
  },

  subCategoryText: {
    fontSize: 15,
    fontFamily: 'Arial',
    color: Colors.spanishWhite,
    padding: 5,
    backgroundColor: Colors.santeFe,
    fontWeight: 'bold',
  },

  categoryText: {
    textAlign: 'left',
    color: Colors.spanishWhite,
    fontSize: 35,
    fontFamily: 'knockout46',
    letterSpacing: 1,
    padding: 10
  },

  categoryView: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.santeFe
  }
});
