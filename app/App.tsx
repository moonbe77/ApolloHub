import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CustomDrawerContent } from './components/Drawer/Drawer'
import { navigationRef } from './RootNavigation'
import { drawerRoutes, RootDrawerParamList } from './router/drawer'
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Drawer = createDrawerNavigator<RootDrawerParamList>()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          // useLegacyImplementation
          initialRouteName="home"
          drawerContent={props => <CustomDrawerContent {...props} />}
        >
          {drawerRoutes.map(({ name, component, options }) => (
            <Drawer.Screen
              key={name}
              name={name}
              component={component}
              options={options}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
