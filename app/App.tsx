import 'react-native-gesture-handler';
import React from 'react'
import { useEffect } from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { CustomDrawerContent } from './components/Drawer/Drawer';
import { navigationRef } from './RootNavigation'

// import { init as notificationsInit } from './services/notifications'
import { Notifications } from 'react-native-notifications'
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer'

import HomeScreen from './screens/HomeScreen'

import SettingsScreen from './screens/SettingsScreen'
import { theme } from './theme'

import { SafeAreaProvider } from 'react-native-safe-area-context'

export type RootDrawerParamList = {
  home: undefined;
  settings: { sort: 'latest' | 'top' } | undefined;
  // Profile: { userId: string };
};
const Drawer = createDrawerNavigator<RootDrawerParamList>()

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator 
        // useLegacyImplementation
        initialRouteName='home'
        drawerContent = {(props)=> <CustomDrawerContent  {...props}/>
        }
        > 
        <Drawer.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: true,    
            // headerLeft: () => <Button
            // title='drawer'
             
            //   >

            //   </Button>
                      
          }}
        />     
        <Drawer.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            // headerBackTitle: 'Back',
          }}
        />  
  
        </Drawer.Navigator>
      </NavigationContainer>    
    </SafeAreaProvider>
  )
}

export default App
