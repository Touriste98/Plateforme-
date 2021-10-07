/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React , { useEffect } from 'react';
import {View} from 'react-native';

import { NavigationContainer,DarkTheme} from '@react-navigation/native';
import MainTabScreen from './Screens/MainTabScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Screens/DrawerContent';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, ActivityIndicator} from 'react-native-paper';
import AideScreen from './Screens/AideScreen';
import { AuthContext } from './component/AuthProvider';
import NotificationScreen from './Screens/NotificationScreen';

import RootStackScreen from './Screens/RootStackScreen';
const Drawer = createDrawerNavigator();



const App = () => {
        const [isLoading,setIsLoading]= React.useState(true);
        const [userToken,setUserToken]= React.useState(null);
        const authContext= React.useMemo(()=>({
                signIn:()=>{
                        setUserToken('otmane');
                        setIsLoading(false);
                },
                signOut:()=>{
                        setUserToken(null);
                        setIsLoading(false);
                },
                signUp:()=>{
                        setUserToken('otmane');
                        setIsLoading(false);
                },
        }));


useEffect(() => {
      setTimeout(() => {
              setIsLoading(false);
      }, 1000);
}, []);


        if(isLoading){
                return(
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <ActivityIndicator size='large'/>
                        </View>
                );
        }

        return(
             <AuthContext.Provider value={authContext}>
             <PaperProvider theme={PaperDarkTheme}>
             <NavigationContainer  theme={DarkTheme}>
                     {userToken !== null ? (
                        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="Home" component={MainTabScreen} />

  
                        <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />

                        <Drawer.Screen name="AideScreen" component={AideScreen} />
                        
                        </Drawer.Navigator>
                     )
                     :
                     <RootStackScreen/>
                }
         </NavigationContainer>
         </PaperProvider>
         </AuthContext.Provider>
        );
};

export default App;

