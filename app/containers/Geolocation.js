import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import BackgroundGeolocation, {
  Location,
  Subscription,
} from 'react-native-background-geolocation'

export const GeolocationContainer = () => {
  const [subscription, setSubscription] = React.useState([])
  const [location, setLocation] = React.useState({})
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [geoReady, setGeoReady] = React.useState(false)

  useEffect(() => {
    BackgroundGeolocation.ready({
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 50,
      debug: true,
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
    }).then(state => {
      setGeoReady(true)
      console.log(state)
      BackgroundGeolocation.start()

      setSubscription(prev => [
        ...prev,
        BackgroundGeolocation.onLocation(
          location => {
            console.log('[onLocation]', location)
            setLocation({ location: JSON.stringify(location, null, 2) })
          },
          error => {
            console.log('[onLocation] ERROR:', error)
          },
        ),
      ])
    })
    return () => {
      BackgroundGeolocation.stop()
      setSubscription(prev => prev.filter(sub => sub.remove()))
    }
  }, [])

  console.log('[GeolocationContainer]', {
    location,
    error,
    isLoading,
    geoReady,
    subscription,
  })

  return (
    <View>
      <Text> geoReady:{geoReady ? 'ready' : 'no'} </Text>
    </View>
  )
}
