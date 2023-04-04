
import {Image, StyleSheet,} from 'react-native';
import React from 'react';

import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Auction from '../screen/Auction';
import Save from '../screen/Save';
import Notification from '../screen/Notification';
import Profile from '../screen/Profile';
import {Homeicon} from '../assets/svg/Homeicon';
import Gellary from '../assets/svg/Gellary';
import {Notifictionicon} from '../assets/svg/Notifictionicon';
import Favrouite from '../assets/svg/Favrouite';
import Avataricon from '../assets/svg/Avataricon';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
         headerShown: false ,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          // backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity:5,
          shadowRadius:15,
          elevation: 5,
        },
        // activeColor="red"
        activeTintColor: 'white',
        inactiveTintColor: 'red',
        // inactiveColor="white"
        // tabBarActiveBackgroundColor:"green",
        // inactiveBackgroundColor:"red",
        //  tabBarStyle: { backgroundColor: 'black'},
        //  labelStyle: { fontSize: 50 },
        //  tabStyle: { paddingBottom: 100, marginHorizontal: 150 },
      }}>
        
      <Tab.Screen  name="Auction" component={Auction}   
      options={{
          tabBarIcon: ({ color, size }) => (
           <Homeicon color={color} />
          ),
        }}
         />
      <Tab.Screen name="Save" component={Save} options={{
          tabBarIcon: ({ color, size }) => (
           <Notifictionicon color={color} />
          ),
        }}/>
      <Tab.Screen name="Notification" component={Notification} options={{
          tabBarIcon: ({ color, size }) => (
           <Favrouite color={color} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
           <Avataricon color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  a: {},
});
