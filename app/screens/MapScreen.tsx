import React from 'react'
import { SafeAreaView } from 'react-native'
import { GeolocationContainer } from '../containers/Geolocation'

const MapScreen = () => {
  return (
    <SafeAreaView>
      <GeolocationContainer />
    </SafeAreaView>
  )
}

export default MapScreen
