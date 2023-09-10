import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../../typings/screens-enums';
import Auction from '../../screen/Auction';
import Biomatric from '../../components/Biomatric';
import Auth from '../../screen/Auth';
import Profile from '../../screen/Profile';

const Stack = createNativeStackNavigator();

const AUCTIONSTACK = () => {
  const screens = [
    {
      name: SCREENS.AUCTION,
      component: Auction,
      headerShown: false,
    },
    {
      name: SCREENS.PROFILE,
      component: Profile,
      headerShown: false,
    },
    {
      name: SCREENS.BIOMATRIC,
      component: Biomatric,
      headerShown: false,
    },
    {
      name: SCREENS.AUTH,
      component: Auth,
      headerShown: false,
    },
  ];
  return (
    <>
      <Stack.Navigator initialRouteName={SCREENS.AUCTION}>
        {screens.map(({name, component, headerShown}: any, index: number) => {
          return (
            <Stack.Screen
              key={`auction-${index}`}
              name={name}
              component={component}
              options={{
                headerShown,
              }}
            />
          );
        })}
      </Stack.Navigator>
    </>
  );
};
export default AUCTIONSTACK;
