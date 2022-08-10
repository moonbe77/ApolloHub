import React, { useEffect } from 'react'
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeDetails from '../containers/HomeDetails'
import DetailsScreen from './DetailsScreen'
import MapScreen from './MapScreen'
import { theme } from '../theme'

const Tab = createBottomTabNavigator()

const HomeScreen = props => {
  console.log(props)

  return (
    <>
     
      <HomeDetails />
    </>
  )
  // return (
  //   <Tab.Navigator
  //     screenOptions={({ route }) => ({
  //       tabBarIcon: ({ focused, color, size }) => {
  //         let iconName = ''
  //         if (route.name === 'homeFeed') {
  //           iconName = focused ? 'home' : 'home-outline'
  //         } else if (route.name === 'details') {
  //           iconName = focused ? 'door-open' : 'door-closed'
  //         } else if (route.name === 'map') {
  //           iconName = focused ? 'map' : 'map-outline'
  //         }
  //         // You can return any component that you like here!
  //         return <Icon name={iconName} size={size} color={color} />
  //       },
  //       tabBarActiveTintColor: theme.colors.tabBarIconActive,
  //       tabBarInactiveTintColor: theme.colors.tabBarIconInactive,
  //     })}
  //   >
  //     <Tab.Screen
  //       name="homeFeed"
  //       component={HomeDetails}
  //       options={{
  //         tabBarLabel: 'Home',
  //         headerShown: false,
  //       }}
  //     />
  //     <Tab.Screen
  //       name="details"
  //       component={DetailsScreen}
  //       options={{
  //         tabBarLabel: 'Details',
  //         headerShown: true,
  //       }}
  //     />
  //     <Tab.Screen
  //       name="map"
  //       component={MapScreen}
  //       options={{
  //         tabBarLabel: 'Map',
  //         headerShown: false,
  //       }}
  //     />
  //   </Tab.Navigator>
  // )
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
