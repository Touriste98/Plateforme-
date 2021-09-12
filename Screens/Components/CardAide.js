import React from 'react'
import { Dimensions, View,StyleSheet,Text} from 'react-native'
import LottieView from 'lottie-react-native';

const CardAide =()=> {
   
        return (
            
            <View style={styles.cardContainer}>
                 <LottieView
                     style={styles.sécurité}
                     source={require('../../images/1154-security-check.json')}
                     size={35}
                      autoPlay
                      loop 
                     />

                     <Text style={styles.textCrad}>
                         La confidentialité de vos données est fondamentale pour HealthClic
                         </Text>
                     
                    
            </View>
        );
    
};

export default CardAide;
const radius=20;
const deviceWidth= Math.round(Dimensions.get('window').width);
const styles=StyleSheet.create(
    {
    cardContainer:{
        alignSelf:'center',
        height:300,
        marginTop:20,
        width:deviceWidth-25,
        backgroundColor:'#fff',
        borderRadius:20,
        shadowColor:'#000',
        shadowOffset:{
            width:5,
            height:5,
        },
        shadowRadius:5,
        shadowOpacity:0.75,
        elevation:9
    },
    sécurité:{
     height:200,
     width:deviceWidth-25,
     borderTopLeftRadius:radius,
     borderTopRightRadius:radius,
     opacity:0.9,
     marginLeft:40
     
    },
    textCrad:{
    fontSize:15,
    marginLeft:5,
    color: '#009393',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center'
    }
});

