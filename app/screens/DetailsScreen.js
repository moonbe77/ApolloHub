// @flow
import React from 'react'
import type { Node } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { theme } from '../theme/styles.js'
import CustomButton from '../components/CustomButton'
import HomeDetails from '../containers/HomeDetails'
import MapDetails from '../containers/MapDetails'
import ContactDetails from '../containers/ContactDetails'
import ImageView from '../containers/ImageView'
import { GeolocationContainer } from '../containers/Geolocation'

type Props = {
  navigation: Object,
}

const Stack = createNativeStackNavigator()
const DetailsScreen = ({ navigation }: Props): Node => {
  const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetails}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: mappedTheme.backgroundColor,
          },
          headerTintColor: mappedTheme.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="MapDetails"
        component={MapDetails}
        options={{
          title: 'Map',
          headerStyle: {
            backgroundColor: mappedTheme.backgroundColor,
          },
          headerTintColor: mappedTheme.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={{
          title: 'Contact',
          headerStyle: {
            backgroundColor: mappedTheme.backgroundColor,
          },
          headerTintColor: mappedTheme.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="imageView" component={ImageView} />
      <Stack.Screen
        name="geolocationContainer"
        component={GeolocationContainer}
        options={{
          title: 'Geolocation',
          headerStyle: {
            backgroundColor: mappedTheme.backgroundColor,
          },
          headerTintColor: mappedTheme.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
})

export default DetailsScreen
