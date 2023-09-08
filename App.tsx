import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import BottomTabs from './navigation/bottomTabs';
import { Provider } from 'react-redux';
import store from './store';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    
      <>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor="black" barStyle="default" />
          <BottomTabs />
        </NavigationContainer>
        </Provider>
      </>
 

  )
}
export default App
