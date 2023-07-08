import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';

export default function MyInput(props) {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Text>{props.label}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: props.width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder={props.label}
          defaultValue={props.value}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 3,
            marginBottom: 10,

            width: '100%',
          }}></TextInput>
        {props.icon == true ? (
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: 40,
              width: 40,
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={props.path} />
          </View>
        ) : null}
      </View>
    </View>
  );
}
