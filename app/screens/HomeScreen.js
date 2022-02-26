import React from 'react'
import type { Node } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native'
import {theme} from '../theme/styles'

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark'  
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: mappedTheme.color,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: mappedTheme.color,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  )
}
const HomeScreen = ({navigation}): Node => {
   const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light  
  

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }
  const scrollSectionStyles = {...styles.scrollSection, ...backgroundStyle}  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={backgroundStyle}>     
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
     
        <Section title="HERO">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </Text>
     
        </Section>
      </View> 
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={scrollSectionStyles}
      >
        
          <Section title="Step 1">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Step 2">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Step 3">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Step 4">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
        
      </ScrollView>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  scrollSection:{        
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

export default HomeScreen