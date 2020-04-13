import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';

import Colors from '../constants/Colors';

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.state = {
      region: {
        latitude: 39.10,
        longitude: -84.51,
        latitudeDelta: 0.1,
        longitudeDelta: 0.05
      },
      markers: [
      ]
    };
  }

  handleRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          onRegionChangeComplete={this.handleRegionChange}
        >
          {this.state.markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.latlong}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }

}

Find.navigationOptions = {
  headerTitle: 'Find',
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
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: Colors.mandy,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
