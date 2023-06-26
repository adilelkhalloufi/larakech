import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  NotifcationListner,
  requestUserPermission,
} from '../Utils/pushnotfecation_helper';
import {useCallback} from 'react';

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    requestUserPermission('');
    NotifcationListner();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setTimeout(async () => {
        navigation.navigate('Menu');
      }, 1000);
    }, []),
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../Assets/Images/usja.png')}
          style={{height: 300, width: 250}}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}
