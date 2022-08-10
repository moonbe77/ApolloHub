import React from 'react'
import { View, Text, Button } from 'react-native'
import {DrawerNavigationProp} from '@react-navigation/drawer'
import {RootDrawerParamList} from '../App'

type Props = {
  navigation: DrawerNavigationProp<RootDrawerParamList,'home'>
}
const SettingsScreen = (props : Props)=> {
  console.log(props)
  return (
    <View>
      <Text>
        SettingsScreen
      </Text>
      <Button title='toggle' onPress={props.navigation.toggleDrawer}/>
      <Button title='back' onPress={props.navigation.goBack}/>
    </View>
    
  )
}

export default SettingsScreen