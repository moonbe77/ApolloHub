import React from 'react'
import { useEffect } from 'react'
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

// import { init as notificationsInit } from './services/notifications'
import { Notifications } from 'react-native-notifications'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'

import SettingsScreen from './screens/SettingsScreen'
import { theme } from './theme'

import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

const App = () => {

  // useEffect(() => {
  //   if (typeof notificationsInit === 'function') {
  //     console.log('initNotifications is a function')
  //     notificationsInit()
  //   }
  // }, [])


  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator> 
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,            
          }}
        />     
        <Stack.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            headerShown: true,   
            headerBackButtonMenuEnabled: true,
            headerBackTitle: 'Back',
          }}
        />  
        {/* <Stack.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            headerShown: true,            
          }}
        /> */}
        </Stack.Navigator>
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
