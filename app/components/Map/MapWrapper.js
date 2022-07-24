// @flow
import React, { useEffect } from 'react'
import type { Node } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { theme } from '../../theme/styles.js'
import MapView, { Marker, Circle } from 'react-native-maps'
import BackgroundGeolocation from 'react-native-background-geolocation'
type Props = {
  navigation: Object,
}

export const MapWrapper = ({
  geoReady,
  geoEnabled,
  isLogging,
  coords,
  footprint,
  handleStart,
  handleStop,
}: Props): Node => {
  const [follow, setFollow] = React.useState(true)
  const [speed, setSpeed] = React.useState(null)

  useEffect(() => {
    BackgroundGeolocation.watchPosition(
      location => {
        // console.log('[watchPosition] -', location)
        setSpeed(parseFloat(location.coords.speed * 1.609344).toFixed(2))
      },
      errorCode => {
        console.log('[watchPosition] ERROR -', errorCode)
      },
      {
        interval: 5000,
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
        persist: false,
        extras: { foo: 'bar' },
        timeout: 60000,
      },
    )
  }, [])

  return (
    <View style={[styles.wrapper]}>
      <View style={styles.options}>
        {geoReady && (
          <>
            {geoEnabled ? (
              <Text onPress={handleStop}>Stop</Text>
            ) : (
              <Text onPress={handleStart}>Start</Text>
            )}
          </>
        )}
        <Text> {speed ?? ''} km/h</Text>
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
    backgroundColor: 'rgba(100,100,90,0.8)',
    padding: 10,
    zIndex: 1,
  },
})
