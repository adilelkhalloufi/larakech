import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Notifications} from 'react-native-notifications';
export async function requestUserPermission(user) {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken(user);
  }
}

export async function GetFCMToken(user) {
  let fmctoken = await AsyncStorage.getItem('fcmtoken');

  if (!fmctoken) {
    try {
      const fmctoken2 = await messaging().getToken();
      console.log('new token ', fmctoken2);
      await AsyncStorage.setItem('fcmtoken', fmctoken2);
    } catch (error) {
      console.log(error, ' error in fcmtoken');
    }
  } else {
    console.log(fmctoken, 'old token');
  }
}

export const NotifcationListner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('notfcation on froground state .....', remoteMessage);

    Notifications.postLocalNotification({
      body: remoteMessage.notification.body,
      title: remoteMessage.notification.title,
      silent: false,
      category: 'SOME_CATEGORY',
      userInfo: {},
      fireDate: new Date(),
    });
  });
};
