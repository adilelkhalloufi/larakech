import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CardMenu(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onClick();
      }}>
      <ImageBackground
        source={props.image}
        style={{
          height: 150,
          width: 150,
          backgroundColor: '#98A7B1',
          borderRadius: 5,
          marginHorizontal: 10,
          marginBottom: 10,
        }}>
        <Text
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: '#ffff',
            fontSize: 25,
            padding: 2,
          }}>
          {props.total}
        </Text>
        <Text
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            color: '#ffff',
            fontSize: 16,
            padding: 4,
          }}>
          {props.label}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
