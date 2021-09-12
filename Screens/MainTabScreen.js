import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import MesRdvScreen from './MesRdvScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import MapTestScreen from './MapTestScreen';


const HomeStack = createStackNavigator();
const RDVStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Accueil"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Accueil"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarColor: '#005353',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Mes Rendez-vous"
        component={MesRdvScreen}
        options={{
          tabBarLabel: 'Mes Rendez-vous',
          tabBarColor: '#009393',
          tabBarIcon: ({ color }) => (
            <Icon2 name="calendar-month-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: '#20C2C2',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Chercher',
          tabBarColor: '#005353',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#005353',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#005353" 
            onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const RDVStackScreen = ({navigation}) => (
 
<RDVStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009393',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <RDVStack.Screen name="Mes rendez-vous" component={MesRdvScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009393" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</RDVStack.Navigator>

);

  