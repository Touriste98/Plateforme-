import React,{useState} from 'react';
import { 
  Text,
   View,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  Picker,
  ScrollView
  
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ParamètreScreen  = ({navigation}) => {

  const [selectedValue, setSelectedValue] = useState("");
   return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle='light-content'/>
      <View style={styles.header}>
          <Text style={styles.text_header}>Paramètres</Text>
      </View>

      <Animatable.View 
      animation='fadeInUpBig'
      style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Nom</Text>
          <View style={styles.action}>
            <SimpleLineIcons
            name='user'
            color='#05375a'
            size={20}
            />
             <TextInput
            style={styles.textInput}
            autoCapitalize="none"
             />
             
       
          </View>
          <Text style={[styles.text_footer,{       
               marginTop:35}

        ]}>Prénom</Text>
          <View style={styles.action}>
            <SimpleLineIcons
            name='user'
            color='#05375a'
            size={20}
            />
             <TextInput
            style={styles.textInput}
            autoCapitalize="none"
             />
             </View>

             <Text style={[styles.text_footer,{       
               marginTop:35}

        ]}>Email</Text>
          <View style={styles.action}>
            <Feather
            name='lock'
            color='#05375a'
            size={20}
            />
             <TextInput
            style={styles.textInput}
            autoCapitalize="none"
             />
             
       
          </View>
          <Text style={[styles.text_footer,{       
               marginTop:35}

        ]}>Age </Text>
          <View style={styles.action}>
            <TextInput
            style={styles.textInput}
            autoCapitalize="none"
             /> 
         </View>
          
          <Text style={[styles.text_footer,{       
               marginTop:35}

        ]}>Groupe sanguin</Text>
          <View style={styles.action}>
           
            <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="AB-" value="AB-"/>
        <Picker.Item label="AB+" value="AB+"/>
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="O+" value="O+" />
      </Picker>
             
       
          </View>
          <Text style={[styles.text_footer,{       
               marginTop:35}

        ]}><MaterialCommunityIcons
        name='map-marker-outline'
        color='#05375a'
        size={26}
        />Wilaya 
         </Text>
          <View style={styles.action}>
           
             <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="ADRAR" value="ADRAR" />
        <Picker.Item label="CHLEF" value="CHLEF" />
        <Picker.Item label="LAGHOUAT" value="LAGHOUAT" />
        <Picker.Item label="OUM BOUAGHI" value="OUM BOUAGHI" />
        <Picker.Item label="BATNA" value="BATNA" />
        <Picker.Item label="BEJAIA" value="BEJAIA" />
        <Picker.Item label="BISKRA" value="BISKRA" />
        <Picker.Item label="BECHAR" value="BECHAR" />
        <Picker.Item label="BLIDA" value="BLIDA" />
        <Picker.Item label="BOUIRA" value="BOUIRA" />
        <Picker.Item label="TAMANRASSET" value="TAMANRASSET" />
        <Picker.Item label="TLEMCEN" value="TLEMCEN" />
        <Picker.Item label="TIARET" value="TIARET" />
        <Picker.Item label="TIZI OUZOU" value="TIZI OUZOU" />
        <Picker.Item label="ALGER" value="ALGER" />
        <Picker.Item label="DJELFA" value="JIJEL" />
        <Picker.Item label="SETIF" value="SETIF" />
        <Picker.Item label="SAIDA" value="SAIDA" />
        <Picker.Item label="SKIKDA" value="SKIKDA" />
        <Picker.Item label="SIDI BEL ABBES" value="SIDI BEL ABBES" />
        <Picker.Item label="ANNABA" value="ANNABA" />
        <Picker.Item label="GUELMA" value="GUELMA" />
        <Picker.Item label="CONSTANTINE" value="CONSTANTINE" />
        <Picker.Item label="MEDEA" value="MEDEA" />
        <Picker.Item label="MOSTAGANEM" value="MOSTAGANEM" />
        <Picker.Item label="M'SILA" value="M'SILA" />
        <Picker.Item label="MASCARA" value="MASCARA" />
        <Picker.Item label="OUARGLA" value="OUARGLA" />
        <Picker.Item label="ORAN" value="ORAN" />
        <Picker.Item label="BORDJ BOU ARRERIDJ" value="BORDJ BOU ARRERIDJ" />
        <Picker.Item label="BOUMERDES" value="BOUMERDES" />
        <Picker.Item label="EL TAREF" value="EL TAREF" />
        <Picker.Item label="TINDOUF" value="TINDOUF" />
        <Picker.Item label="TISSEMSILT" value="TISSEMSILT" />
        <Picker.Item label="EL OUED" value="EL OUED" />
        <Picker.Item label="KHENCHLA" value="KHENCHLA" />
        <Picker.Item label="SOUK AHRASS" value="SOUK AHRASS" />
        <Picker.Item label="TIPAZA" value="TIPAZA" />
        <Picker.Item label="MILA" value="MILA" />
        <Picker.Item label="AÏN DEFLA" value="AIN DEFLA" />
        <Picker.Item label="NÄAMA" value="NÄAMA" />
        <Picker.Item label="AÏN TEMOUCHENT" value="AÏN TEMOUCHENT" />
        <Picker.Item label="GHARDAÏA" value="GHARDAÏA" />
        <Picker.Item label="RELIZANE" value="RELIZANE" />
      </Picker>
             
       
          </View>
          <Text style={[styles.text_footer,{       
               marginTop:35}

        ]}>Numéro de téléphone  
         </Text>
          <View style={styles.action}>
          <Feather
            name='smartphone'
            color='#05375a'
            size={26}
            />
             <TextInput
            style={styles.textInput}
            autoCapitalize="none"
             />
             
       
          </View>
          <Text style={[styles.text_footer,{       
               marginTop:35}

        ]}>Sexe  <FontAwesome
        name='intersex'
        color='#05375a'
        size={20}
        /></Text>
          <View style={styles.action}>
           
              <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Homme" value="Homme" />
        <Picker.Item label="Femme" value="femme" />
      </Picker>
             
       
          </View>

         

          </ScrollView>
          <TouchableOpacity
                    onPress={()=>navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009393'
                    }]}>Enregister</Text>
                </TouchableOpacity>
      </Animatable.View>
     </View>
     );
};


export default ParamètreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 50
     
     
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  }
});
