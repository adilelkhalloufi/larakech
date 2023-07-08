import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ItemContact(props) {
  return (
    <TouchableOpacity
      key={props?.index}
      onPress={() => {
        props?.onclick();
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
            {props?.name}
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
            {props?.entreprise}
          </Text>
        </View>
      </View>
      {props?.statut_label ? (
        <View
          style={{
            backgroundColor: props?.statut_couleur,
            padding: 3,
            borderRadius: 5,
          }}>
          <Text style={{color: '#fff'}}>{props.statut_label}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
