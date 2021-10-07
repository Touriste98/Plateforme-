import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2  from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../component/AuthProvider';
export function DrawerContent(props){
    const [isDarkTheme,setIsDarkThemes]=React.useState(false);
    const {signOut}= React.useContext(AuthContext);
    const toggleTheme=()=>{
        setIsDarkThemes(!isDarkTheme);
    }
    return(
        <View style={[styles.interface,{flex:1}]}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}></View>

                     <View style={styles.userInfoSection}>
                           <View style={{flexDirection:'row',marginTop: 15}}>
                                    <Avatar.Image 
                                        source={{
                                            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                        }}
                                        size={50}
                                    />
                              <View style={{marginLeft:15, flexDirection:'column'}}>
                                    <Title style={styles.title}>Otmane ilhem</Title>
                                    <Caption style={styles.caption}>@ilhem</Caption>
                              </View>
                            </View>

            </View>

            <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Accueil"
                            onPress={() => {props.navigation.navigate('Accueil')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profil"
                            onPress={() => {props.navigation.navigate('Profil')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="calendar-month-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Mes rendez-vous"
                            onPress={() => {props.navigation.navigate('Mes Rendez-vous')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="notifications-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Notifications"
                            onPress={() => {props.navigation.navigate('NotificationScreen')}}
                        />
                        {/*<DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Paramèttre"
                            onPress={() => {props.navigation.navigate('ParamètreScreen')}}
                            />*/}
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="information-circle-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Aide"
                            onPress={() => {props.navigation.navigate('AideScreen')}}
                        />
                    </Drawer.Section>
                   
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Thème sombre</Text>
                                <View pointerEvents="none"> 
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
           </DrawerContentScrollView>
           <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Déconnexion"
                    onPress={() =>(signOut())}
                />
            </Drawer.Section>

          </View>
    );
};
const styles = StyleSheet.create({
    interface:{

    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
   
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
