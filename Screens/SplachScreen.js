import React, { Component } from 'react'
import { View,
   StyleSheet,
   Dimensions,
   Text,
   Image,
   TouchableOpacity
 } from 'react-native';
 import LinearGradient from 'react-native-linear-gradient';
 import MaterialIcons from "react-native-vector-icons/MaterialIcons";
 import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';

const  SplachScreen =({navigation})=>  {
    
        return(
            <View style = {styles.container}>
                 <View style={styles.header}>
                     <Animatable.Image
                     animation="bounceIn"
                     
                     source={require('../images/healthClic.png')}
                     style={styles.logo}
                     resizeMode='stretch'
                     />
                 </View>
                 <Animatable.View 
                 animation="fadeInUpBig"
                 style={styles.footer}>
                    <Text style={styles.title}>Prendre un rendez en ligne est possile</Text>
                    <Text style={styles.text}>Trouvez votre médecin facilement</Text>
                    <Animatable.View 
                    animation="bounceInLeft"
                    

                    style={styles.button}>
                    <TouchableOpacity onPress= {()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                         colors={['#08d4c4', '#01ab9d']}
                         style={styles.signIn}
                        >
                            
                        <Text style={styles.textSign}>Commencer </Text>
                        <MaterialIcons
                        name='navigate-next'
                        color='#fff'
                        size={20}
                        />
                        </LinearGradient>
                    </TouchableOpacity>
                    </Animatable.View>
                 </Animatable.View>
               
            </View>
        )
    
}

export default SplachScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#009387',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#aaF4F4',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        marginTop:5,
        fontSize:20
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });
  
  