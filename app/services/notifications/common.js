import React from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import { Notifications } from 'react-native-notifications'
import { navigate } from '../../RootNavigation'

export const dispatchNotification = (notification: Notification) => {
  console.log('NOTIF::Received', notification.payload)
  const { payload } = notification
  if (payload?.type === 'message') {
    const { title, body } = notification.payload
    Alert.alert(title, body, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  }

  if (payload?.type === 'image') {
    const { title, body, image } = notification.payload
    navigate('imageView', {
      title,
      body,
      image,
    })
    // navigate to image view
  }
}
