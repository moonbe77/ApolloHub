// @flow
import React from 'react'
import type { Node } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import {theme} from '../theme'
import CustomButton from '../components/CustomButton'

const Stack = createNativeStackNavigator()
const DetailsScreen = ({ navigation }: Props): Node => {
  const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }

  return (
  <View>
    <Text>DetailsScreen to show speed, altitude, etc</Text>
    <Text>STOP START BUTTONS</Text>
    <Text>UPLOAD TO DB</Text>
    <Text>SHOW ON MAP</Text>
    </View>
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
