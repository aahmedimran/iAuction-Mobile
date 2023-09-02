import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import BottomTabs from './navigation/bottomTabs';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    
      <>
        <NavigationContainer>
          <StatusBar backgroundColor="black" barStyle="default" />
          <BottomTabs />
        </NavigationContainer>
      </>
 

  )
}
export default App
