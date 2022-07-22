// @flow
import React from 'react'
import type { Node } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { theme } from '../../theme/styles.js'
import MapView, { Marker, Circle } from 'react-native-maps'

type Props = {
  navigation: Object,
}

export const MapWrapper = ({ coords, footprint }: Props): Node => {
  const [follow, setFollow] = React.useState(true)
  return (
    <View style={[styles.wrapper]}>
      <View style={styles.options}>
        <Text onPress={() => setFollow(!follow)}> Start </Text>
        <Text onPress={() => setFollow(!follow)}> Stop </Text>
        <Text onPress={() => setFollow(!follow)}> Follow </Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            longitude: coords?.longitude ?? 151.283519,
            latitude: coords?.latitude ?? -33.792554,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          coordinate={{
            latitude: -33.792554,
            longitude: 151.283519,
          }}
          followsUserLocation={follow}
          onPanDrag={() => {
            setFollow(false)
          }}
          showsUserLocation={true}
        >
          {/* {coords && (
            <Marker
              title="User Location"
              coordinate={{
                latitude: coords?.latitude,
                longitude: coords?.longitude,
              }}
            />
          )} */}
          {footprint.length > 0 &&
            footprint.map(location => (
              <Circle
                key={location.uuid}
                radius={15}
                strokeColor="rgba(255,0,0,0.9)"
                fillColor="rgba(255,0,0,0.5)"
                title="Footprint"
                center={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
              />
            ))}

          <Marker
            title="Manly Beach"
            coordinate={{ latitude: -33.794, longitude: 151.2878 }}
            onPress={data => {
              console.log('onMarkerPress', data.currentTarget)
            }}
          />
        </MapView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    backgroundColor: '#777',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(100,100,90,0.5)',
    padding: 10,
    zIndex: 1,
  },
})
