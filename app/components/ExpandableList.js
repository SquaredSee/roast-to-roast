import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

export default class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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

          <FontAwesomeIcon icon={ faSortDown } style={styles.iconStyle} />
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
