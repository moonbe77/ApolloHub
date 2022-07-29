/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { useEffect } from 'react'
import type { Node } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './RootNavigation'

import { init as notificationsInit } from './services/notifications'
import { Notifications } from 'react-native-notifications'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import {GeolocationContainer} from './containers/Geolocation'
import {theme} from './theme'

import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App: () => Node = () => {
  const [badge, setBadge] = React.useState(10)

  useEffect(() => {
    if (typeof notificationsInit === 'function') {
      console.log('initNotifications is a function')
      notificationsInit()
    }
  }, [])
console.log(theme)
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (route.name === 'Details') {
                iconName = focused ? 'door-open' : 'door-closed'
              }else if (route.name === 'Map') {
                iconName = focused ? 'map':'map-outline' 
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: theme.colors.tabBarIconActive,
            tabBarInactiveTintColor: theme.colors.tabBarIconInactive,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Map"
            component={GeolocationContainer}
            options={{              
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  scrollSection: {
    minHeight: '100%',
    backgroundColor: '#777',
  },
  sectionContainer: {
    marginTop: 18,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
