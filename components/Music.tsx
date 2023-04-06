import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image, } from 'react-native'
import React from 'react'
import { themeColors } from '../theme/colors'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { size } from '../theme/fontstyle'
import { Fontfamily } from '../theme/fontFamily'

const Music = () => {
    const cardData = Array(10).fill({
        Name: 'Metatiger',
        currantPrice: '$25',
        timeLeft: '1 d 12 h',
      });
  return (
    <>
      <View>
          <FlatList
            data={cardData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.cardCaintner}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/images/image.png')}
                />
                <Text style={styles.productname}>{item.Name}</Text>
                <View style={styles.cardDetail}>
                  <View style={styles.cardDetailChild}>
                    <Text style={styles.itemTitle}>Currant Price</Text>
                    <Text style={styles.currantPrice}>{item.currantPrice}</Text>
                  </View>
                  <View>
                    <Text style={styles.itemTitle}>Left Time</Text>
                    <Text style={styles.timeLeft}>{item.timeLeft}</Text>
                  </View>
                </View>

                <View style={styles.cardButton}>
                  <TouchableOpacity style={[styles.button,styles.buyContainer]}>
                    <Text style={styles.buy}>Buy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button,styles.saveContainer]}>
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

export default Music

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
    // itemTitle: {
    //   paddingRight: 10,
    //   borderColor: themeColors.garyColor,
    //   fontSize: size.s,
    // },
    currantPrice: {
      color: '#6DC74B',
      fontWeight: 'bold',
      fontSize:size.lg,
    },
    timeLeft: {
      color: themeColors.secondaryColor,
      fontWeight: 'bold',
      fontSize:size.lg,
      
    },
    cardButton: {
      flexDirection: 'row',
      gap: 20,
      paddingLeft: moderateScale(15),
    },
    button: {
      borderWidth: 1,
      borderRadius:10,
       marginTop: 10,
      paddingHorizontal: 25,
      paddingVertical:5,
      borderColor:'#E54637'
    },
    buyContainer:{
      backgroundColor:'#E54637',
      color: themeColors.primaryColor,
  
    },
    save:{
      color: themeColors.secondaryColor,
      fontWeight:'500'
    },
    buy:{
      color: themeColors.primaryColor,
      fontWeight:'500'
  
    },
    saveContainer:{}
  });