import React from 'react'
import { useEffect } from 'react'
import {
  useColorScheme,
  StyleSheet,
  View,
  Dimensions,
  Button,
} from 'react-native'
import {
  useDeviceOrientation,
  useDimensions,
} from '@react-native-community/hooks'

import Text from 'react-native/Libraries/Text/Text'

import { theme } from '../theme/styles'

type Props = {
  title: string,
  onPress: () => void,
}

const CustomButton = ({ title, onPress }: Props) => {
  const isDarkMode = useColorScheme() === 'dark'
  console.log('CustomButton::isDarkMode', isDarkMode)
  const mappedTheme = isDarkMode ? theme.dark : theme.light
  // const dimensions = useDimensions()

  const sty = {
    backgroundColor: mappedTheme.backgroundColor,
    width: '50%',
  }

  return (
    <View style={[sty, styles.container]}>
      <Button title={title} onPress={onPress} color={mappedTheme.color} />
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginVertical: 10,
  },
})
