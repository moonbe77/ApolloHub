import React from 'react'

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native'
import {theme} from '../theme/styles.js'

const DetailsScreen = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }
  
  return (
    <View style={[styles.wrapper, backgroundStyle]}>
      <Text style={styles.text}>
        Details
      </Text>
      <Button        title="Refresh"        onPress={() => navigation.push('Details')}        />     
      <Button        title="Go Back"        onPress={() => navigation.goBack()}        />     
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />     
        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  wrapper:{        
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