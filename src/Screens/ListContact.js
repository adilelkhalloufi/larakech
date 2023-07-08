import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderMenu from '../Components/HeaderMenu';
import {useNavigation} from '@react-navigation/native';
import ItemContact from '../Components/ItemContact';
import {useState} from 'react';
import {it} from 'node:test';
import axios from 'axios';
import {URL_API} from '../Config/Config';
import {useEffect} from 'react';

export default function ListContact() {
  const [MyListContact, setMyListContact] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetContacts();
  }, []);
  const GetContacts = async () => {
    setIsLoading(true);

    try {
      axios.get(URL_API + `contacts?page=${page}`).then(res => {
        setMyListContact([...MyListContact, ...res.data?.data]);
        setPage(res.data?.current_page);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setIsLoading(false);
  };
  const navigate = useNavigation();
  const renderItem = ({item}) => {
    return (
      <ItemContact
        onclick={() => {
          navigate.navigate('DetailContact', {
            item: item,
          });
        }}
        name={item.nom + ' ' + item.prenom}
        key={item.cle}
        statut_couleur={item.statut_couleur}
        statut_label={item.statut_label}
        entreprise={item.entreprise}
      />
    );
  };
  const renderFooter = () => {
    if (!isLoading) return null;

    return <ActivityIndicator color="red" />;
  };
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
      <FlatList
        data={MyListContact}
        renderItem={renderItem}
        keyExtractor={item => item.cle.toString()}
        onEndReached={GetContacts}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}
