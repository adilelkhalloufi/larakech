import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderMenu from '../Components/HeaderMenu';
import CardMenu from '../Components/CardMenu';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import axios from 'axios';
import {URL_API} from '../Config/Config';
import {useState} from 'react';

export default function Menu() {
  const navigate = useNavigation();
  const [MyMenu, SetMyMen] = useState({
    action: 0,
    affaire: 0,
    contact: 0,
    document: 0,
    ligne: 0,
    note: 0,
    organisation: 0,
    piece: 0,
    produit: 0,
    reglement: 0,
    ticket: 0,
  });
  const GetInfos = async () => {
    await axios
      .get(URL_API + 'infos/volumetrie')
      .then(res => {
        console.log('GetInfos ', res.data);
        SetMyMen(res.data);
      })
      .catch(e => {
        console.log('error');
      });
  };
  useEffect(() => {
    GetInfos();
  }, []);
  return (
    <SafeAreaView>
      <HeaderMenu search={false} />

      <ScrollView style={{marginBottom: 100}}>
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
            total={MyMenu.action}
            label="Action"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.affaire}
            label="Affaire"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.contact}
            label="Contact"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.document}
            label="Document"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.ligne}
            label="Ligne"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.note}
            label="Note"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.organisation}
            label="Organisation"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.piece}
            label="Piece"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.produit}
            label="Produit"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.reglement}
            label="Reglement"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
          <CardMenu
            total={MyMenu.ticket}
            label="Ticket"
            onClick={() => {
              navigate.navigate('ListContact');
            }}
            image={require('../../Assets/Images/contactback.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
