import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, } from 'react-native'
import React from 'react'
import { themeColors } from '../theme/colors'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { size } from '../theme/fontstyle'
import { Fontfamily } from '../theme/fontFamily'
import LiveTimer from '../common/LiveTimer'



type itemProp = {
  Auctiondata?:any
  name?:string;
  currantPrice?:string;
  timeLeft?:number;
}

const Nft:React.FC<itemProp> = ({Auctiondata}) => {

  // console.log(Auctiondata);

  return (
    <>
      <View style={{ alignItems: 'center', marginBottom: 220 }}>
        <FlatList
          data={Auctiondata }
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cardCaintner}>
              <Image
                style={styles.tinyLogo}
                source={{uri:item?.product?.file}}
              />
              <View style={styles.textHeading}>
                <Text style={styles.productname}>Product name</Text>
                <Text style={styles.productname}>{item?.product?.Name}</Text>
              </View>
              <View style={styles.cardDetail}>
                <View style={styles.cardDetailChild}>
                  <Text style={styles.itemTitle}>Currant Price</Text>
                  <Text style={styles.currantPrice}>{item?.product?.price}</Text>
                </View>
                <View>
                  <Text style={styles.itemTitle}>Left Time</Text>
                  <LiveTimer targetTime={item?.product?.auctionEndTime}/>
                  {/* <Text style={styles.timeLeft}>{item?.product?.auctionEndTime}</Text> */}
                </View>
              </View>

              <View style={styles.cardButton}>
                <TouchableOpacity style={[styles.button, styles.buyContainer]}>
                  <Text style={styles.buy}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.saveContainer]}>
                  <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        // keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  )
}

export default Nft

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
    marginTop: moderateScale(20),
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
  textHeading: {
    flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', width: "100%", marginBottom: verticalScale(10)
  },
  tinyLogo: {
    width: moderateScale(280),
    height: 150,
    borderRadius: 20,
    margin: moderateScale(10),
    resizeMode:'cover'
  },
  cardCaintner: {
    margin: 20,
    alignItems: 'center',
    // backgroundColor:"red",
    width: moderateScale(310),
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
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 20,
    // paddingLeft: moderateScale(15),
  },
  itemTitle: {
    color: themeColors.garyColor,
  },
  cardDetailChild: {
    borderRightWidth: 1,
    borderColor: themeColors.garyColor,
  },
  // itemTitle: {
  //   paddingRight: 10,
  //   borderColor: themeColors.garyColor,
  //   fontSize: size.s,
  // },
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

  },
  saveContainer: {}
});