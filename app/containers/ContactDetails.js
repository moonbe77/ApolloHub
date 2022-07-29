// @flow
import React from 'react'
import type { Node } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { theme } from '../theme'
import CustomButton from '../components/CustomButton'

type Props = {
  navigation: Object,
}

const ContactDetails = ({ navigation }: Props): Node => {
  const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }

  return (
    <View style={[styles.wrapper, backgroundStyle]}>
      <CustomButton title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.text}>Contact Details</Text>
      <CustomButton
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
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

export default ContactDetails
