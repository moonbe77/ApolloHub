import React, { useEffect } from 'react'
import { Text, View, AppState } from 'react-native'
import BackgroundGeolocation, {
  Location,
  Subscription,
} from 'react-native-background-geolocation'
import { MapWrapper } from '../components/Map'

export const GeolocationContainer = () => {
  const [subscription, setSubscription] = React.useState([])
  const [location, setLocation] = React.useState({})
  const [error, setError] = React.useState('')
  const [isLogging, setIsLogging] = React.useState(false)
  const [geoReady, setGeoReady] = React.useState(false)
  const [geoEnabled, setGeoEnabled] = React.useState(false)
  const [footprint, setFootprint] = React.useState([])

  useEffect(() => {
    BackgroundGeolocation.ready({
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 20,
      preventSuspend: true,
      heartbeatInterval: 30, // <-- every minute
      stopOnTerminate: false,
      deferTime: 1,
      debug: true,
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
    }).then(state => {
      setGeoReady(true)
      console.log(state)
      BackgroundGeolocation.start().then(() => {
        setIsLogging(true)
      })

      setSubscription(prev => [
        ...prev,
        BackgroundGeolocation.onLocation(
          location => {
            console.log('[onLocation]', location)
            setLocation({ ...location })
            setFootprint(prev => [...prev, location])
          },
          error => {
            console.log('[onLocation] ERROR:', error)
          },
        ),
      ])
      setSubscription(prev => [
        ...prev,
        BackgroundGeolocation.onActivityChange(
          location => {
            console.log('[onActivityChange]', location)
            // setLocation({ location: JSON.stringify(location, null, 2) })
          },
          error => {
            console.log('[onActivityChange] ERROR:', error)
          },
        ),
      ])
      setSubscription(prev => [
        ...prev,
        BackgroundGeolocation.onProviderChange(
          location => {
            console.log('[onProviderChange]', location)
            // setLocation({ location: JSON.stringify(location, null, 2) })
          },
          error => {
            console.log('[onProviderChange] ERROR:', error)
          },
        ),
      ])
      setSubscription(prev => [
        ...prev,
        BackgroundGeolocation.onEnabledChange(isEnabled => {
          console.log('[onEnabledChange]', isEnabled)
          setGeoEnabled(isEnabled)
        }),
      ])
    })
    return () => {
      BackgroundGeolocation.stop()
      setSubscription(prev => prev.filter(sub => sub.remove()))
    }
  }, [])

  const handleStart = () => {
    BackgroundGeolocation.start().then(state => {
      setIsLogging(true)
    })
  }
  const handleStop = () => {
    BackgroundGeolocation.stop().then(state => {
      setIsLogging(false)
    })
  }
  const getLog = () => {

    BackgroundGeolocation.logger.getLog().then(log => {
      console.log('[getLog]', log)
    }).catch(error => {
      console.log('[getLog] ERROR:', error)
    })
  }

  return (
    <MapWrapper
      geoReady={geoReady}
      geoEnabled={geoEnabled}
      isLogging={isLogging}
      coords={location.coords}
      footprint={footprint}
      handleStart={handleStart}
      handleStop={handleStop}
      getLog={getLog}
    />
  )
}
