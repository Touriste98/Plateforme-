import React from 'react';
import Card from './Components/CardAide';
import { StyleSheet, View,Button,Text,StatusBar,ScrollView } from 'react-native';
  const HomeScreen =({navigation})=> {
    
    return (
        <View style={styles.container}>

       <ScrollView>
        
       </ScrollView>
      
      </View>
    )

}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
})
