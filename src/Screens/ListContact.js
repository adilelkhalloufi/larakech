import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import HeaderMenu from '../Components/HeaderMenu';
import {useNavigation} from '@react-navigation/native';
import ItemContact from '../Components/ItemContact';
import {useState} from 'react';
import {it} from 'node:test';

export default function ListContact() {
  const [MyListContact, setMyListContact] = useState([
    {
      name: 'Adil elkhalloufi',
      tag: 'HOR LINGE',
      badge: true,
      badgeValue: 'Client',
    },
    {
      name: 'HICHAM',
      tag: 'HOR LINGE',
      badge: true,
      badgeValue: 'Client',
    },
    {
      name: 'SAMIR',
      tag: 'HOR LINGE',
      badge: true,
      badgeValue: 'Client',
    },
    {
      name: 'ZOUBIR',
      tag: 'HOR LINGE',
      badge: true,
      badgeValue: 'Client',
    },
    {
      name: 'TARIK',
      tag: 'HOR LINGE',
      badge: true,
      badgeValue: 'Client',
    },
  ]);
  const navigate = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <HeaderMenu search={true} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          borderRadius: 50,
          backgroundColor: '#B6DFE2',
          height: 50,
          width: 50,
          zIndex: 50,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Image source={require('../../Assets/Images/add-user.png')}></Image>
      </TouchableOpacity>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F6F7F8',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate.goBack();
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              padding: 4,
            }}>
            <Image source={require('../../Assets/Images/left.png')} />
          </TouchableOpacity>
          <Text>Contact</Text>
        </View>
        {MyListContact.map((item, index) => {
          return (
            <ItemContact
              onclick={() => {
                navigate.navigate('DetailContact', {
                  item: item,
                });
              }}
              key={index}
              name={item.name}
              tag={item.tag}
              badge={item.badge}
              badgeValue={item.badgeValue}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
