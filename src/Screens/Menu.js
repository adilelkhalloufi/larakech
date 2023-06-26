import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderMenu from '../Components/HeaderMenu';
import CardMenu from '../Components/CardMenu';
import {useNavigation} from '@react-navigation/native';

export default function Menu() {
  const navigate = useNavigation();
  return (
    <SafeAreaView>
      <HeaderMenu search={false} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 20,
          justifyContent: 'center',
          flex: 1,
        }}>
        <CardMenu
          total={59}
          label="Contact"
          onClick={() => {
            navigate.navigate('ListContact');
          }}
          image={require('../../Assets/Images/contactback.png')}
        />
        <CardMenu
          total={59}
          label="Contact"
          onClick={() => {
            navigate.navigate('ListContact');
          }}
          image={require('../../Assets/Images/contactback.png')}
        />
        <CardMenu
          total={59}
          label="Contact"
          onClick={() => {
            navigate.navigate('ListContact');
          }}
          image={require('../../Assets/Images/contactback.png')}
        />
        <CardMenu
          total={59}
          label="Contact"
          onClick={() => {
            navigate.navigate('ListContact');
          }}
          image={require('../../Assets/Images/contactback.png')}
        />
      </View>
    </SafeAreaView>
  );
}
