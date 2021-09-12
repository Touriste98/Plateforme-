import React from 'react';
import { StyleSheet, View,Button,Text,StatusBar } from 'react-native';
  const HomeScreen =({navigation})=> {
    
    return (
        <View style={styles.container}>

        <Text>Accueil Screen</Text>
        <Button
            title="Go to details screen"
            onPress={() => navigation.navigate("DetailsScreen")}
        />
      
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
