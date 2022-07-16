import { AppState, NativeModules } from 'react-native'
import {
  dispatchNotification,
  //   getDeviceToken,
  //   onPushRegistered,
  //   onPushRegistrationFailed,
  //   unregisterDeviceToken,
  //   uploadDeviceToken,
} from './common.js'

import { Notifications } from 'react-native-notifications'

// const AppIconBadgeAndroid = NativeModules.AppIconBadgeAndroid

function readIntialNotification() {
  //check notification when app is opened form cold state
  Notifications.getInitialNotification()
    .then(notification => {
      console.log('NOTIF::initial', notification)
      if (notification) {
        dispatchNotification(notification, 'coldStart')
      }
    })
    .catch(e => {
      logger.debug('failed to get initial notification', e)
    })
}

function init() {
  // Notifications.setNotificationChannel({
  //   channelId: 'chat_channel',
  //   name: 'Test Channel',
  //   importance: 5,
  //   description: 'Notifications for Ivehub Chat',
  //   enableLights: true,
  //   enableVibration: true,
  //   showBadge: true,
  //   vibrationPattern: [200, 1000, 500, 1000, 500],
  // })

  Notifications.registerRemoteNotifications()

  Notifications.events().registerRemoteNotificationsRegistered(event => {
    console.log('NOTIF::EVENT', event)
    // Send the token to my server so it could send back push notifications...
    // onPushRegistered(event.deviceToken)
  })

  Notifications.events().registerNotificationOpened(
    (notification: Notification, completion: () => void) => {
      console.log('NOTIF::Opened', notification)
      dispatchNotification(notification)
      completion()
    },
  )

  Notifications.events().registerRemoteNotificationsRegistrationFailed(
    event => {
      console.log('NOTIF::FAILED registration', event)
      // onPushRegistrationFailed(event)
    },
  )

  Notifications.events().registerNotificationReceivedForeground(
    (notification, completion) => {
      // console.log('NOTIF::Received Foreground', notification)

      dispatchNotification(notification)
      completion({ alert: true, sound: true, badge: false })
    },
  )

  Notifications.events().registerNotificationReceivedBackground(
    (notification, completion) => {
      // console.log('NOTIF::Received Background', notification)
      dispatchNotification(notification)
      completion({ alert: true, sound: true, badge: false })
    },
  )

  AppState.addEventListener('change', function (newState) {
    console.log('NOTIF::App state change Android')
    //clear up badge number
    if (newState === 'active') {
      console.log('NOTIF::App state change ', newState)
      // AppIconBadgeAndroid.removeCount()
    }
  })

  readIntialNotification()
}

export {
  init,
  // uploadDeviceToken,
  // getDeviceToken,
  // unregisterDeviceToken
}
