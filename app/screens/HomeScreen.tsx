// @flow
import React from 'react'
import { StyleSheet, Text, useColorScheme, View, Button } from 'react-native'
import { theme } from '../theme'
import CustomButton from '../components/CustomButton'
import crashlytics from '@react-native-firebase/crashlytics'
import { Notifications } from 'react-native-notifications'
import {DrawerNavigationProp} from '@react-navigation/drawer'
import {RootDrawerParamList} from '../App'
type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList,'home'>
}

const HomeScreen = ({ navigation }: Props) => {
  const isDarkMode = useColorScheme() === 'dark'
  const mappedTheme = isDarkMode ? theme.dark : theme.light

  const backgroundStyle = {
    backgroundColor: mappedTheme.backgroundColor,
  }
  const handleNotification = () => {
    Notifications.postLocalNotification({
      payload: {
        body: 'Local notification!',
        title: 'Local Notification Title',
      },
      body: 'body',
      title: 'title',
      identifier: '1234',
      sound: 'default',
      badge: 1,
      type: '1',
      thread: 'test',
    })
  }

  const handleCrash = () => {
    crashlytics().log('Home Screen Crash')
    crashlytics().crash()
  }

  const logReport = () => {
    try {
      throw new Error('This is a test error')
    } catch (error) {
      console.log(error)
      crashlytics().recordError(error as Error, 'This is a test throw error')
    }
  }

  return (
    <View style={[styles.wrapper]}>
      <Text style={styles.text}>HOME SCREEN</Text>
      <CustomButton onPress={handleNotification} title="notif" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('settings', { sort: 'latest' })}
          title="Go settings"/>
        
         <Button
          onPress={() => navigation.openDrawer()}
          title="toggle drawer"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    backgroundColor: '#770007',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
})

export default HomeScreen
