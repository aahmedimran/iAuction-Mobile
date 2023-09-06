import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themeColors } from '../theme/colors';
import { SCREENS } from '../typings/screens-enums';
import Auction from '../screen/Auction';
import Save from '../screen/Save';
import { Homeicon } from '../assets/svg';
import Gellary from '../assets/svg/Gellary';
import Favrouite from '../assets/svg/Favrouite';
import Avataricon from '../assets/svg/Avataricon';
import { size } from '../theme/fontstyle';
import { Fontfamily } from '../theme/fontFamily';
import Biddies from '../screen/Biddies';
import Myhub from '../screen/Myhub';

const Tab = createBottomTabNavigator();

type BottomIconProps = {
  children?: React.ReactNode;
  focused: any;
  title: string;
};

const BottomIcon: React.FC<BottomIconProps> = ({ focused, children, title }) => {
  return (
    <View style={styles.container}>
      {children}
      <Text
        style={[
          styles.textStyle,
          {
            color: focused ? themeColors.aquaColor : themeColors.garyColor,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};
const screens = [
  {
    name: SCREENS.AUCTION,
    component: Auction,
    headerShown: false,
    label: '',
  },
  {
    name: SCREENS.MYHUB,
    component: Myhub,
    headerShown: false,
    label: '',
  },
  {
    name: SCREENS.SAVE,
    component: Save,
    headerShown: false,
    label: '',
  },
  {
    name: SCREENS.BIDDIES,
    component: Biddies,
    headerShown: false,
    label: '',
  },
];

const BottomTabs = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.AUCTION}
      screenOptions={{
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#16E6EF',
        tabBarHideOnKeyboard: true,

        // tabBarBackground: () => {
        //   return (
        //     Platform.OS === 'ios' && (
        //       <BlurView
        //         style={{
        //           position: 'absolute',
        //           top: 0,
        //           left: 0,
        //           bottom: 0,
        //           right: 0,
        //         }}
        //         blurType="dark"
        //         blurAmount={15}
        //         reducedTransparencyFallbackColor="#192020"
        //         overlayColor="#192020"
        //       />
        //     )
        //   );
        // },
      }}>
      {screens.map(({ name, component, headerShown, label }, index) => {
        return (
          <Tab.Screen
            key={`bottom-tabs-${index}`}
            name={name}
            component={component}
            options={({ route }) => ({
              headerShown,
              tabBarLabel: label,
              tabBarStyle: {
                display: [
                  SCREENS.PROFILE,
                  SCREENS.BIOMATRIC
                ].includes(getFocusedRouteNameFromRoute(route) as any)
                  ? 'none'
                  : show
                    // || isLoggedIn
                    ? 'flex'
                    : 'none',
                // backgroundColor: 'white',
                height: 70,
                paddingBottom: Platform.OS === 'ios' ? 5 : 0,
                position: 'absolute',
                borderTopWidth: 0,
                zIndex: 0,
                paddingTop: 22,
                alignItems: 'center',
                justifyContent: 'center',
              },
              tabBarIcon: ({ color, focused }) => {
                if (name.includes(SCREENS.AUCTION)) {
                  return (
                    <BottomIcon
                      focused={focused}
                      title="Home"
                      children={
                        <Homeicon color={focused ? themeColors.aquaColor : 'black'}
                          opacity={focused ? 1 : 0.5} />
                        // <Gellary
                        // color={themeColors.aquaColor}
                        // opacity={focused ? 1 : 0.5}
                        // />
                      }
                    />
                  );
                }
                if (name.includes(SCREENS.MYHUB)) {
                  return (
                    <BottomIcon
                      focused={focused}
                      title="My Hub"
                      children={
                        <Gellary
                          color={focused ? themeColors.aquaColor : 'black'}
                          opacity={focused ? 1 : 0.5}
                        />
                      }
                    />
                  );
                }
                if (name.includes(SCREENS.SAVE)) {
                  return (
                    <BottomIcon
                      focused={focused}
                      title="Favroiute"
                      children={
                        <Favrouite
                          color={focused ? themeColors.aquaColor : 'black'}
                          opacity={focused ? 1 : 0.5}
                        />
                      }
                    />
                  );
                }
                if (name.includes(SCREENS.BIDDIES)) {
                  return (
                    <BottomIcon
                      focused={focused}
                      title="BIDDIES"
                      children={
                        <Avataricon
                          color={focused ? themeColors.aquaColor : 'black'}

                        // opacity={focused ? 1 : 0.5}
                        />
                      }
                    />
                  );
                }
              },
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: size.xs,
    fontFamily: Fontfamily.Avenier,
    lineHeight: size.xlg,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});