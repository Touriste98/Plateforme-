import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import Card from './Components/CardAide';
const AideScreen = () => {
    return (
      <View style={styles.container}>
         <ScrollView>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         </ScrollView>
      </View>
    );
};

export default AideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
   
    backgroundColor:'#009393'
  },
});
