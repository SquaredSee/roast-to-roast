import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Platform } from 'react-native';

import Colors from '../constants/Colors';

const latlng = (lat, lng) => ({
  latitude: lat,
  longitude: lng
});

const describe = (shop) => {
  let desc = `Address: ${shop.address}`;
  if (shop.website) {
    desc += `\nWebsite: ${shop.website}`;
  }
  if (shop.description) {
    desc += `\n\n${shop.description}`;
  }
  return desc;
};

const buildMarkerList = (data) => (
  data.map((shop) => ({
    id: shop.id,
    title: shop.name,
    coordinate: latlng(shop.latitude, shop.longitude),
    description: describe(shop)
  }))
);

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
      markers: []
    };
  }

  getMarkers() {
    fetch('http://192.168.1.4:3000/shops', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        this.setState({ markers: buildMarkerList(data) });
      }
    })
    .catch((e) => console.error(e));
  }

  handleRegionChange(region) {
    this.setState({ region });
  }

  componentDidMount() {
    this.getMarkers();
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
              coordinate={marker.coordinate}
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
    width: '100%',
    height: '100%'
  }
});
