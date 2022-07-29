// @flow
import React from 'react'
import type { Node } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { theme } from '../theme'
import CustomButton from '../components/CustomButton'
import MapView, { Marker } from 'react-native-maps'

type Props = {
  navigation: Object,
}

const MapDetails = ({ navigation }: Props): Node => {
  const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }

  return (
    <View style={[styles.wrapper, backgroundStyle]}>
      <View style={styles.buttonsWrapper}>
        <CustomButton title="⬅️" onPress={() => navigation.goBack()} />
        <CustomButton
          title="📩"
          onPress={() => navigation.navigate('ContactDetails')}
        />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            longitude: 151.28351,
            latitude: -33.79246,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          followsUserLocation={true}
          showScale={true}
          showsUserLocation={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
        >
          <Marker
            title="Manly Beach"
            coordinate={{ latitude: -33.794, longitude: 151.2878 }}
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
})

export default MapDetails
