/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import { NavigationContainer,DarkTheme} from '@react-navigation/native';
import MainTabScreen from './Screens/MainTabScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './Screens/DrawerContent';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme} from 'react-native-paper';
import AideScreen from './Screens/AideScreen';

import NotificationScreen from './Screens/NotificationScreen';
import ParamètreScreen from './Screens/ParamètreScreen';

const Drawer = createDrawerNavigator();



const App = () => {

        return(
             <PaperProvider theme={PaperDarkTheme}>
        <NavigationContainer  theme={DarkTheme}>
               {/*<RootStackScreen/>*/}

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
 
        <Drawer.Screen name="ParamètreScreen" component={ParamètreScreen} />
        <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
       
        <Drawer.Screen name="AideScreen" component={AideScreen} />
        
        </Drawer.Navigator>
       
        
         </NavigationContainer>
         </PaperProvider>
        
        );
};

export default App;

