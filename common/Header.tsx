import React from 'react';
import {Text, View, StyleSheet, StatusBar, Platform} from 'react-native';
import {size} from '../theme/fontstyle';
import {Fontfamily} from '../theme/fontFamily';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {themeColors} from '../theme/colors';
import { Homeicon } from '../assets/svg';
type HeaderProps = {
  title?: boolean;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  centerTitle?: any;
  childStyle?: any;
  centerStyle?: any;
  rightStyle?: any;
  containerStyle?: any;
  children?: React.ReactNode;
  sizeprop?: number;
};

const Header: React.FC<HeaderProps> = ({
  title,
  leftChildren,
  rightChildren,
  centerTitle,
  childStyle,
  centerStyle,
  rightStyle,
  containerStyle,
  children,
  sizeprop
}) => {
  return (
    <>
      {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
      <View style={{...styles.container, ...containerStyle}}>
        <View style={styles.child}>
          <View style={{...styles.leftChildren, ...childStyle}}>
            {leftChildren}
          </View>
          <View style={{...styles.center, ...centerStyle}}>
            {title ? (
              <Homeicon color='red' opacity = '2'/>
              // <LogoIcon />
            ) : children ? (
              children
            ) : (
              <Text style={[styles.centerTitle,{fontSize:sizeprop ? sizeprop: size.lg}]}>{centerTitle}</Text>
            )}
          </View>
          <View style={{...styles.rightChildren, ...rightStyle}}>
            {rightChildren}
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    paddingHorizontal: moderateScale(22),
    paddingTop: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(10),
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: verticalScale(30),
  },
  leftChildren: {
    width: '30%',
  },
  center: {
    width: '35%',
    alignItems: 'center',
  },
  rightChildren: {
    width: '30%',
    alignItems: 'flex-end',
  },
  title: {
    // color: themeColors.primaryColor,
    fontSize: size.lg,
    fontWeight: '500',
    fontFamily: Fontfamily.Avenier,
  },
  centerTitle: {
    // color: 'white',
    fontSize: size.lg,
    fontWeight: '500',
    fontFamily: Fontfamily.Avenier,
  },
});