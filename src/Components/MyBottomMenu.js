import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function MyBottomMenu() {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 60,
        backgroundColor: '#9DA9B4',
        justifyContent: 'space-around',
        paddingVertical: 10,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{flexDirection: 'column', alignItems: 'center'}}
        onPress={() => {}}>
        <Image source={require('../../Assets/Images/search.png')} />
        <Text style={{color: '#fff'}}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'column', alignItems: 'center'}}
        onPress={() => {}}>
        <Image source={require('../../Assets/Images/search.png')} />
        <Text style={{color: '#fff'}}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'column', alignItems: 'center'}}
        onPress={() => {}}>
        <Image source={require('../../Assets/Images/search.png')} />
        <Text style={{color: '#fff'}}>Taches</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'column', alignItems: 'center'}}
        onPress={() => {}}>
        <Image source={require('../../Assets/Images/search.png')} />
        <Text style={{color: '#fff'}}>Affire</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'column', alignItems: 'center'}}
        onPress={() => {}}>
        <Image source={require('../../Assets/Images/menu.png')} />
        <Text style={{color: '#fff'}}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
