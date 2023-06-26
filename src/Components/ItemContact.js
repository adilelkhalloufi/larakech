import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ItemContact(props) {
  return (
    <TouchableOpacity
      key={props.index}
      onPress={() => {
        props.onclick();
      }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={require('../../Assets/Images/contact.png')} />
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '900', color: '#000'}}>
            {props.name}
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
            {props.tag}
          </Text>
        </View>
      </View>
      {props.badge == true ? (
        <View style={{backgroundColor: '#698C73', padding: 3, borderRadius: 5}}>
          <Text style={{color: '#fff'}}>{props.badgeValue}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
