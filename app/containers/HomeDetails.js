// @flow
import React from 'react'
import type { Node } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { theme } from '../theme/styles.js'
import CustomButton from '../components/CustomButton'

type Props = {
  navigation: Object,
}

const HomeDetails = ({ navigation }: Props): Node => {
  const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }

  return (
    <View style={[styles.wrapper, backgroundStyle]}>
      <Text style={styles.text}>Details</Text>
      <CustomButton title="Go Back" onPress={() => navigation.goBack()} />
      <CustomButton
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <CustomButton
        title="MAP"
        onPress={() => navigation.navigate('MapDetails')}
      />
      <CustomButton
        title="Contact"
        onPress={() => navigation.navigate('ContactDetails')}
      />
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

export default HomeDetails
