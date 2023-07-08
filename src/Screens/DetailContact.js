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
import axios from 'axios';
import {URL_API} from '../Config/Config';

export default function DetailContact({route}) {
  const {item} = route.params;
  const navigate = useNavigation();
  const [states, setstates] = useState(false);
  const [ContactObj, setContactObj] = useState({
    contact: {
      adresse: '',
      adresse_facturation: '',
      anniversaire: '',
      campagnes_clics: '',
      campagnes_desabonnements: '',
      campagnes_envois: '',
      campagnes_erreurs: '',
      campagnes_ouvertures: '',
      candidat: 0,
      categories_produit: '',
      civilite: 19,
      cle: '',
      code_extranet: '',
      code_postal: '',
      code_postal_facturation: '',
      commercial: 19,
      confidentialite_id: '',
      consommateur_id: 0,
      courrier_date_desabonnement: null,
      courrier_date_erreur: null,
      courrier_date_optin: null,
      courrier_desabonne: 0,
      courrier_erreur: 0,
      courrier_optin: 0,
      created_at: '',
      cumul_achats: '',
      cumul_achats_fidelite: '',
      cumul_points_fidelite: 0,
      date_code_extranet: '0000-00-00 00:00:00',
      date_dernier_achat: '0000-00-00',
      date_dernier_contact: '0000-00-00 00:00:00',
      date_naissance: '0000-00-00',
      date_optin_sitc: '0000-00-00 00:00:00',
      date_optin_ys: '0000-00-00 00:00:00',
      date_ouverture_carte: '0000-00-00',
      date_premier_achat: '0000-00-00',
      date_prochain_contact: '0000-00-00 00:00:00',
      deleted_at: null,
      e_mail: '',
      enfant_1: '0000-00-00',
      enfant_2: '0000-00-00',
      enfant_3: '0000-00-00',
      enfant_4: '0000-00-00',
      erreurs_code_extranet: 0,
      etape_prospection: null,
      facebook: '',
      fete: '',
      fonction: 'Feutier',
      frequence_achat: '0.00',
      hop_langue: 'FR',
      hop_mail_transfert: '',
      hop_timezone: '',
      id: 1,
      identifiant_externe: '',
      instagram: '',
      ip_optin_sitc: '',
      ip_optin_ys: '',
      linkedin: '',
      mail_anomalie: 0,
      mail_anomalies: 0,
      mail_clics: 0,
      mail_clics_moyens: '',
      mail_clics_uniques: 0,
      mail_cumul_anomalies: 0,
      mail_date_anomalie: null,
      mail_date_dernier_clic: null,
      mail_date_dernier_envoi: null,
      mail_date_derniere_ouverture: null,
      mail_date_desabonnement: null,
      mail_date_erreur: null,
      mail_date_optin: null,
      mail_date_premier_envoi: null,
      mail_date_verification: null,
      mail_desabonne: 0,
      mail_envois: 0,
      mail_erreur: 0,
      mail_erreurs: 0,
      mail_erreurs_moyennes: '',
      mail_erreurs_uniques: 0,
      mail_frequence_envoi: '',
      mail_optin: 0,
      mail_ouvertures: 0,
      mail_ouvertures_moyennes: '',
      mail_ouvertures_uniques: 0,
      mail_resultat_verification: '',
      mail_score_clic: 0,
      mail_score_global: 0,
      mail_score_ouverture: 0,
      mail_score_reactivite: 0,
      mail_statut: '',
      mail_taux_clic: '',
      mail_taux_ouverture: '',
      mail_taux_reactivite: '',
      mail_type_verification: '',
      niveau: 0,
      niveau_2022: 0,
      nom: '',
      nom_facturation: '',
      nombre_achats: 0,
      nombre_achats_fidelite: 0,
      nombre_liens_actions: 0,
      nombre_liens_affaires: 0,
      nombre_liens_contacts: 0,
      nombre_liens_documents: 0,
      nombre_liens_notes: 0,
      nombre_liens_organisations: 1,
      nombre_liens_produits: 0,
      nombre_liens_tickets: 0,
      nombre_points: 0,
      notes: '',
      opt_in_e_mail: 0,
      origine: 0,
      origine_item_id: 0,
      origine_type_id: 71,
      panier_moyen: '0.00',
      pays: '',
      pays_facturation: '',
      plateforme_telephone_id: '',
      prenom: '',
      prive: 0,
      proprietaire_id: 0,
      protege: 0,
      salarie: 0,
      secteur_activite: 0,
      service: '',
      service_id: 0,
      sms_anomalie: 0,
      sms_anomalies: 0,
      sms_clics: 0,
      sms_clics_moyens: '0.00',
      sms_clics_uniques: 0,
      sms_cumul_anomalies: 0,
      sms_date_anomalie: null,
      sms_date_dernier_envoi: null,
      sms_date_desabonnement: null,
      sms_date_erreur: null,
      sms_date_optin: null,
      sms_date_premier_envoi: null,
      sms_desabonne: 0,
      sms_envois: 0,
      sms_erreur: 0,
      sms_erreurs: 0,
      sms_erreurs_moyennes: '0.00',
      sms_erreurs_uniques: 0,
      sms_frequence_envoi: '0.00',
      sms_optin: 0,
      sms_ouvertures: 0,
      sms_ouvertures_moyennes: '0.00',
      sms_ouvertures_uniques: 0,
      sms_score_clic: 0,
      sms_score_global: 0,
      sms_score_ouverture: 0,
      sms_score_reactivite: 0,
      sms_taux_clic: '0.00',
      sms_taux_ouverture: '0.00',
      sms_taux_reactivite: '0.00',
      statut: 0,
      telephone_fixe: '',
      telephone_mobile: '',
      telephone_mobile_a_composer: '',
      tva_intracommunautaire: '',
      twitter: '',
      updated_at: '',
      url_extranet: '',
      ville: '',
      ville_facturation: '',
      vip: 0,
      youtube: '',
    },
    entreprise: {
      abonnement_ht: '0.00',
      abonnement_ttc: '0.00',
      abonnement_tva: '0.00',
      adresse: '',
      adresse_facturation: '',
      bloc_maxi: 0,
      ca_client_affaires: '0.00',
      ca_client_factures: '',
      ca_facture: '',
      ca_partenaire_affaires: '0.00',
      ca_partenaire_factures: '0.00',
      ca_reference_client: '',
      ca_reference_partenaire: '0.00',
      capital: null,
      categorie_entreprise: '',
      cle: '',
      client: 0,
      code_extranet: '',
      code_naf: '',
      code_postal: '',
      code_postal_facturation: '',
      commercial: '',
      commission_sur_ca: '',
      commission_sur_marge: '0.00',
      commissions_affaires: '0.00',
      commissions_factures: '0.00',
      conditions_paiement: 0,
      confidentialite_id: '',
      created_at: '',
      date_code_extranet: '0000-00-00 00:00:00',
      date_dernier_contact: '0000-00-00',
      date_donnees_legales: null,
      date_enrichissement: null,
      date_immatriculation: '0000-00-00',
      date_prochain_contact: '0000-00-00',
      deleted_at: null,
      departement: '',
      dernier_ca: null,
      dernier_resultat: null,
      e_mail: '',
      effectif: '',
      enrichissement_contacts: '',
      enrichissement_sirene: '',
      enrichissement_societe: '',
      erreurs_code_extranet: 0,
      etape_prospection: 2847,
      facebook: '',
      forme_juridique: '',
      hop_mail_transfert: '',
      id: 1,
      instagram: '',
      latitude: '',
      linkedin: '',
      logo: null,
      longitude: '',
      lu: 0,
      marge_client_affaires: '0.00',
      marge_client_factures: '.00',
      marge_partenaire_affaires: '0.00',
      marge_partenaire_factures: '0.00',
      marge_reference_client: '.00',
      marge_reference_partenaire: '0.00',
      medef: null,
      nom: '',
      nom_facturation: '',
      nombre_liens_actions: 1,
      nombre_liens_affaires: 1,
      nombre_liens_contacts: 2,
      nombre_liens_documents: 2,
      nombre_liens_notes: 0,
      nombre_liens_organisations: 0,
      nombre_liens_produits: 0,
      nombre_liens_tickets: 0,
      notes: '',
      origine: 0,
      origine_item_id: 0,
      origine_type_id: 0,
      partenaire: 0,
      pays: '',
      pays_facturation: '',
      prive: 0,
      proprietaire_id: 0,
      protege: 0,
      rang_maxi: 0,
      sans_nom: '',
      secteur_activite: '',
      service_id: 0,
      siret: '',
      site_web: '',
      solde_signature: 0,
      solde_signature_label: null,
      statut: null,
      statut_business: 0,
      taux_remise: '0.00',
      telephone_fixe: '',
      temperature_lead: 0,
      tva_intracommunautaire: '',
      twitter: '',
      univers: 0,
      updated_at: '',
      url_extranet: 0,
      ville: '',
      ville_facturation: '',
      vip: 0,
      youtube: '',
    },
  });
  useEffect(() => {
    GetContactInfo();
  }, []);
  const GetContactInfo = async () => {
    axios.get(URL_API + 'contacts/' + item.cle).then(res => {
      console.log('GetContactInfo ', res.data);
      setContactObj(res.data);
    });
  };
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
                {ContactObj.contact?.nom} {ContactObj.contact?.prenom}
              </Text>
              <Text style={{color: '#fff', fontWeight: '300'}}>
                {' '}
                {ContactObj.entreprise.nom}
              </Text>
              <Text style={{color: '#fff', fontWeight: '300'}}>
                {ContactObj.contact.e_mail}
              </Text>
              <Text style={{color: '#fff', fontWeight: '300'}}>
                {' '}
                {ContactObj.contact.telephone_mobile}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  `sms:${ContactObj.contact.telephone_mobile}?body=hello`,
                );
              }}>
              <Image source={require('../../Assets/Images/mail.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => {
                Linking.openURL(`tel:${ContactObj.contact.telephone_mobile}`);
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
        <MyInput label="Nom" value={ContactObj.contact.nom} />
        <MyInput label="Prenom" value={ContactObj.contact.prenom} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <MyInput
            value={ContactObj.contact.e_mail}
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
            value={ContactObj.contact.telephone_mobile}
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
            value={ContactObj.contact.telephone_mobile_a_composer}
            label="Telephone"
            icon={true}
            width="85%"
            path={require('../../Assets/Images/telephone.png')}
          />
          <Text>{ContactObj.contact.statut}</Text>
        </View>
      </ScrollView>
      <MyBottomMenu />
    </SafeAreaView>
  );
}
