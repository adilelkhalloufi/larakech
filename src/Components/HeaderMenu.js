import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function HeaderMenu(props) {
  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          height: 80,
          backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',

          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
        colors={['rgba(46, 168, 179, 0.92)', ' rgba(43, 83, 112, 0.92) 100%)']}>
        {props.search == true ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '75%',
              position: 'relative',
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 2,
                height: 40,
                width: 40,
                backgroundColor: '#7DC6CD',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}
              onPress={() => {
                console.log('dsqfsd');
              }}>
              <Image source={require('../../Assets/Images/search.png')} />
            </TouchableOpacity>
            <TextInput
              placeholder="Recherche"
              style={{
                height: 40,
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: 50,
                paddingHorizontal: 10,
              }}></TextInput>
          </View>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/contact.png')}
              style={{backgroundColor: 'white', borderRadius: 50}}
            />
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={{color: '#fff', fontWeight: '900'}}>
                Bonjour Utilsateur
              </Text>
              <Text style={{color: '#fff', fontWeight: '300'}}>HOP ONLINE</Text>
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Image source={require('../../Assets/Images/notification.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Image source={require('../../Assets/Images/menu.png')} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
