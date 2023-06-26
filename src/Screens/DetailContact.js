import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
  ScrollView,
  Switch,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import MyInput from '../Components/MyInput';
import {useState} from 'react';
import MyBottomMenu from '../Components/MyBottomMenu';

export default function DetailContact({route}) {
  const {item} = route.params;
  const navigate = useNavigation();
  const [states, setstates] = useState(false);
  useEffect(() => {
    console.log('item', item);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['rgba(46, 168, 179, 0.92)', ' rgba(43, 83, 112, 0.92) 100%)']}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigate.goBack();
            }}>
            <Image source={require('../../Assets/Images/left_white.png')} />
            <Text
              style={{
                color: '#fff',
              }}>
              Contact
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onPress={() => {}}>
            <Text
              style={{
                color: '#fff',
              }}>
              Modifer
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 80,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginBottom: 20,
          }}>
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
              <Text style={{color: '#fff', fontWeight: '300'}}>
                test@test.com
              </Text>
              <Text style={{color: '#fff', fontWeight: '300'}}>0612704187</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('mailto:adilelkhalloufi@gmail.com');
              }}>
              <Image source={require('../../Assets/Images/mail.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => {
                Linking.openURL(`tel:0612704187`);
              }}>
              <Image source={require('../../Assets/Images/telephone.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <ScrollView
        style={{
          paddingHorizontal: 10,
        }}>
        <MyInput label="Nom" />
        <MyInput label="Prenom" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <MyInput
            label="Email"
            icon={true}
            width="85%"
            path={require('../../Assets/Images/mail.png')}
          />
          <Switch value={states} onValueChange={setstates} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <MyInput
            label="Telephone"
            icon={true}
            width="85%"
            path={require('../../Assets/Images/telephone.png')}
          />
          <Switch value={states} onValueChange={setstates} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <MyInput
            label="Telephone"
            icon={true}
            width="85%"
            path={require('../../Assets/Images/telephone.png')}
          />
          <Text></Text>
        </View>
      </ScrollView>
      <MyBottomMenu />
    </SafeAreaView>
  );
}
