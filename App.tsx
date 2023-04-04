//@ts-nocheck
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './common/Tabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
   
      <NavigationContainer >
        <Tabs/>
        {/* <Stack.Navigator>
        <Stack.Screen name="Auction" component={Auction} />
        <Stack.Screen name="Save" component={Save} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator> */}
      </NavigationContainer>
    
  )
}
export default App

const styles = StyleSheet.create({
  Cointainer:{
    // marginHorizontal:50,
    // paddingVertical: 20,
    // flexDirection:'row',
    // alignContent:'flex-end',
    // justifyContent:'space-around',
    // backgroundColor: 'black',
    // width: 300,
    // height:70,
    // borderRadius: 20,
  }
})
