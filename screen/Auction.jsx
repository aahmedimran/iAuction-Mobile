import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import SearchIcon from '../assets/svg/SearchIcon';
import Layout from '../common/Layout';
import { Fontfamily } from '../theme/fontFamily';
import { size } from '../theme/fontstyle';
import { themeColors } from '../theme/colors';
import Nft from '../components/Nft';
import Header from '../common/Header';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CameraIcon from '../assets/svg/CameraIcon';
import { SCREENS } from '../typings/screens-enums';
import { useDispatch, useSelector } from 'react-redux';
import { getAuctionItem } from '../store/slicer/GetAuction';
import { selectAuctionItemdata } from '../store/selectors/getAuctionselectors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Auction = () => {
  const { navigate, } = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  const Auctiondata = useSelector(selectAuctionItemdata)
  const [isFocusedTab, setIsFocusedTab] = useState('All');
  let categary = ['All', 'Music', 'Souvenirs'];
  const cardData = Array(10).fill({
    Name: 'Metatiger',
    currantPrice: '$25',
    timeLeft: '1 d 12 h',
  });
  const getuserId = async () => {
    console.log("in");
    try {
      const getUserId = await AsyncStorage.getItem('userId')
      console.log("getUserId", getUserId);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if (Auctiondata.length > 0){

      return
    }
    dispatch(getAuctionItem())

  }, [])

  return (
    <Layout>
      <Header
        title={false}
        centerTitle='Auctions'
        leftChildren={
          <Pressable onPress={() => navigate(SCREENS.PROFILE)}>
            <Image
              style={{ width: 30, height: 30 }}
              source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' }}
            />
          </Pressable>
        }
        rightChildren={

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={() => navigate(SCREENS.AUTH)}>
              <SearchIcon />

            </Pressable>
            <Pressable onPress={() => navigate(SCREENS.AUCTION)} style={{ paddingLeft: 10 }}>
              <CameraIcon />
            </Pressable></View>

        }
      />
      <View>
        <View>
          <ScrollView horizontal style={styles.socialArtitems}>
            {categary?.map((val, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => setIsFocusedTab(val)}>
                  <Text
                    style={[
                      styles.categaryText,
                      isFocusedTab === val ? styles.activeTab : null,
                    ]}>
                    {val}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {isFocusedTab.includes("All") && (<Nft Auctiondata={Auctiondata} />)}


      </View>
    </Layout>
  );
};

export default Auction;

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: verticalScale(20),
    paddingLeft: verticalScale(50),
  },
  headingtexttren: {
    // fontFamily: Fontfamily.Neuropolitical,
    // fontWeight: '400',
    // fontSize:size.xlg,
    // color: 'black',
    // fontFamily: 'Neuropolitical',
    // fontStyle: 'normal',
    // fontWeight: 400,
    // fontSize: 24,
    // lineHeight: '110',
    /* or 26px */
    fontWeight: '500',
    color: themeColors.garyColor,
    fontSize: size.xxxlg,
    fontFamily: 'SpaceGrotesk-SemiBold',
  },
  headingtextcol: {
    color: '#E54637',
  },
  SearchCointiener: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: verticalScale(20),
  },
  input: {
    width: 500,
  },
  categaryContainer: {},
  socialArtitems: {
    marginVertical: verticalScale(10),
    marginHorizontal: moderateScale(20),
  },
  categaryText: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    textAlign: 'center',
    marginRight: 30,
    borderRadius: 10,
    backgroundColor: '#bdbdbd',
    color: 'black',
  },
  activeTab: {
    color: 'white',
    backgroundColor: 'black',
    // borderBottomColor: 'red',
    // borderBottomWidth: Platform.OS === 'ios' ? 1 : 1,
  },
  tinyLogo: {
    width: 200,
    height: 150,
    borderRadius: 20,
    margin: moderateScale(10),
  },
  cardCaintner: {
    margin: 20,
    // alignItems: 'center',
    width: 230,
    height: 300,
    borderWidth: 2,
    borderRadius: 20,
  },
  productname: {
    paddingLeft: moderateScale(15),
    fontWeight: 'bold',
    color: themeColors.secondaryColor,
    fontSize: size.lg,
    fontFamily: Fontfamily.Neuropolitical,
  },
  cardDetail: {
    flexDirection: 'row',
    gap: 20,
    paddingLeft: moderateScale(15),
  },
  itemTitle: {
    color: themeColors.garyColor,
  },
  cardDetailChild: {
    borderRightWidth: 1,
    borderColor: themeColors.garyColor,
  },
  itemTitle: {
    paddingRight: 10,
    borderColor: themeColors.garyColor,
    fontSize: size.s,
  },
  currantPrice: {
    color: '#6DC74B',
    fontWeight: 'bold',
    fontSize: size.lg,
  },
  timeLeft: {
    color: themeColors.secondaryColor,
    fontWeight: 'bold',
    fontSize: size.lg,

  },
  cardButton: {
    flexDirection: 'row',
    gap: 20,
    paddingLeft: moderateScale(15),
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderColor: '#E54637'
  },
  buyContainer: {
    backgroundColor: '#E54637',
    color: themeColors.primaryColor,

  },
  save: {
    color: themeColors.secondaryColor,
    fontWeight: '500'
  },
  buy: {
    color: themeColors.primaryColor,
    fontWeight: '500'

  }
});
