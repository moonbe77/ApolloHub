// @flow
import React, {useEffect} from 'react'
import type { Node } from 'react'
import crashlytics from '@react-native-firebase/crashlytics'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native'
import { theme } from '../theme/styles'
import CustomButton from '../components/CustomButton'
type Props = {
  navigation: Object,
}

type SectionProps = {
  title: string,
  children: Node,
}

const Section = ({ children, title }: SectionProps): Node => {
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

const HomeScreen = ({ navigation }: Props): Node => {
  const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  useEffect(() => {
    crashlytics().setUserId('12345')
    crashlytics().setAttributes({
      name: 'John Doe',
      email: 'email@email.com',
    })
    
  
   
  }, [])
  

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }
  const scrollSectionStyles = { ...styles.scrollSection, ...backgroundStyle }

  const handleCrash = () => {
    crashlytics().log('Home Screen Crash')
    crashlytics().crash()
  }
  const logReport = () => {
    try {
      throw new Error('This is a test error')
    } catch (error) {
      console.log(error)
      crashlytics().recordError(error,'This is a test throw error')
      
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={backgroundStyle}>
        <CustomButton
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <CustomButton title="Test Crash" onPress={handleCrash} />
        <CustomButton title="Test Log report" onPress={logReport} />

        <Section title="Header">
          <Text>Config</Text>
          <View>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={text => console.log(text)}
              value={'value'}
              style={{ padding: 10 }}
            />
          </View>
        </Section>
      </View>
    </SafeAreaView>
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
  button: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
})

export default HomeScreen
