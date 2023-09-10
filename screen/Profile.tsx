import React, { useEffect, useRef } from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Layout from '../common/Layout';
import Header from '../common/Header';
import { themeColors } from '../theme/colors';
import { Fontfamily } from '../theme/fontFamily';
import { size } from '../theme/fontstyle';
import { DoubleDotIcon } from '../assets/svg/DoubleDotIcon';
import { LocationIcon } from '../assets/svg/LocationIcon';
import SettingIcon from '../assets/svg/SettingIcon';
import Backicon from '../assets/svg/Backicon';

const Profile = () => {
  const { goBack } = useNavigation<any>()

  return (
    <Layout>
      <ScrollView style={{ paddingBottom: 100 }}>
        <ImageBackground
          style={styles.profile}
          resizeMode="cover"
          source={{
            uri:
              'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
          }}>
          <Header
            title={false}
            leftChildren={
              <TouchableOpacity onPress={() => goBack()}>
                <Backicon />
              </TouchableOpacity>
            }
            centerTitle=""
            rightChildren={
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <SettingIcon />
                  <DoubleDotIcon />
                </TouchableOpacity>
              </View>
            }
            containerStyle={styles.headerStyle}
          />
          <View style={styles.profileContainer}>
            <View style={styles.profileHeading}>
              <View style={styles.profileEdit}>
                <LocationIcon />
                <Text style={styles.profileEditText}>time</Text>
              </View>
              <Text style={styles.profileTitle}>aa</Text>
            </View>
          </View>
        </ImageBackground>

      </ScrollView>
    </Layout>
  );
};

export default Profile;
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'transparent'
  },
  crossStyle: {
    marginVertical: moderateScale(25),
    alignSelf: 'center',
  },
  labelStyle: {
    fontFamily: Fontfamily.Neuropolitical,
    fontSize: 24,
    color: 'white',
    lineHeight: 26,
    textAlign: 'center',
    marginVertical: 16,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    // height: moderateScale(300),
    flex: 1,
  },
  profileGradient: {
    height: moderateScale(300),
    // paddingBottom: moderateScale(18),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(20),
  },
  headerTitle: {
    // color: themeColors.primaryColor,
    fontFamily: Fontfamily.Avenier,
    fontWeight: '500',
    fontSize: size.md,
  },
  headerButton: {},
  headerButtonText: {
    color: themeColors.aquaColor,
    fontFamily: Fontfamily.Neuropolitical,
    fontWeight: '400',
    fontSize: size.default,
  },
  profileContainer: {
    paddingHorizontal: moderateScale(22),
    justifyContent: 'flex-end',
  },
  profileHeading: {
    height: '82%',
    justifyContent: 'flex-end',
  },
  profileTitle: {
    // color: themeColors.primaryColor,
    fontFamily: Fontfamily.Neuropolitical,
    fontWeight: '400',
    fontSize: size.xxlg,
    width: moderateScale(300),
    marginTop: moderateScale(10),
  },
  profileEdit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileEditText: {
    // color: themeColors.primaryColor,
    fontFamily: Fontfamily.Avenier,
    fontWeight: '500',
    fontSize: size.default,
    marginLeft: moderateScale(14),
  },
  followingContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(22),
    paddingTop: moderateScale(0),
  },
  followingText: {
    fontFamily: Fontfamily.Avenier,
    fontSize: size.s,
    color: themeColors.garyColor,
  },
  followingCount: {
    fontFamily: Fontfamily.Grostestk,
    fontSize: size.xlg,
    // color: themeColors.primaryColor,
  },
  fanContainer: {
    marginRight: moderateScale(40),
  },
  moreIcon: {
    paddingLeft: moderateScale(130),
  },
  trandingComponent: {
    marginTop: moderateScale(30),
  },
  trending: {
    paddingHorizontal:
      Platform.OS === 'ios' ? moderateScale(0) : moderateScale(6),
    flexDirection: 'row',
  },
  trendingView: {
    marginTop: moderateScale(10),
    marginRight: moderateScale(8),
    marginBottom: moderateScale(2),
  },
  trendingContainer: {
    backgroundColor: themeColors.cardsColor,
    // width: verticalScale(280),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    borderRadius: 24,
    justifyContent: 'space-between',
  },
  trendingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: moderateScale(5),
  },
  trendingheadingView: {
    paddingBottom: moderateScale(5),
  },
  trendingCardImage: {
    height: verticalScale(30),
    width: verticalScale(30),
    borderRadius: 50,
  },
  trendingViewText: {},
  trendingText: {
    marginLeft: moderateScale(10),
    // color: themeColors.primaryColor,
    fontFamily: Fontfamily.Avenier,
    fontSize: size.default,
    fontWeight: '500',
  },
});
