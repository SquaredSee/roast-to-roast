import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Platform, Text, ScrollView, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

// Coordinates for Cincinnati
const LATITUDE = 39.10;
const LONGITUDE = -84.51;

const latlng = (lat, lng) => ({
  latitude: lat,
  longitude: lng
});

const describe = (shop) => {
  let desc = `${shop.address}`;
  if (shop.website) {
    desc += `\n${shop.website}`;
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
    description: describe(shop),
    color: `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  }))
);

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.focusMap = this.focusMap.bind(this);
    this.buildListItem = this.buildListItem.bind(this);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0.05
      },
      markers: []
    };
  }

  buildListItem(marker) {
    return (
      <TouchableOpacity key={marker.id} style={styles.shopListItem} onPress={() => this.focusMap([marker.id.toString()])}>
        <Text style={styles.listItemText}>{marker.title}</Text>
        <Text style={styles.listItemText}>{marker.description}</Text>
      </TouchableOpacity>
    );
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

  focusMap(markers) {
    this.map.fitToSuppliedMarkers(markers);
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.handleRegionChange}
          customMapStyle={mapStyle}
          ref={(ref) => {
            this.map = ref;
          }}
        >
          {this.state.markers.map((marker) => (
            <Marker
              key={marker.id}
              identifier={marker.id.toString()}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              pinColor={marker.color}
            >
              {/* <Callout>custom map pin tooltip, can be any react component</Callout> */}
            </Marker>
          ))}
        </MapView>
        <ScrollView style={styles.shopList}>
          {this.state.markers.map((marker) => this.buildListItem(marker))}
        </ScrollView>
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
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: Colors.mandy,
  },
  mapStyle: {
    // ...StyleSheet.absoluteFillObject
    height: '60%',
    width: '100%'
  },
  shopList: {
    flex: 1,
    width: '100%',
    marginTop: 5,
  },
  shopListItem: {
    backgroundColor: Colors.santeFe,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5
  },
  listItemText: {
    color: Colors.spanishWhite
  }
});

// Default 'Retro' style from https://mapstyle.withgoogle.com/
const mapStyle = [
  {
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ebe3cd'
      }
    ]
  },
  {
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#523735'
      }
    ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#f5f1e6'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#c9b2a6'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#dcd2be'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#ae9e90'
      }
    ]
  },
  {
    'featureType': 'landscape.natural',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#93817c'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#a5b076'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#447530'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#f5f1e6'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#fdfcf8'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#f8c967'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#e9bc62'
      }
    ]
  },
  {
    'featureType': 'road.highway.controlled_access',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e98d58'
      }
    ]
  },
  {
    'featureType': 'road.highway.controlled_access',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'color': '#db8555'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#806b63'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#8f7d77'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#ebe3cd'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dfd2ae'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#b9d3c2'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#92998d'
      }
    ]
  }
];
