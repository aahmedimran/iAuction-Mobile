// import React, { useEffect, useRef } from 'react';
// // import { useNavigation } from '@react-navigation/native';
// import {
//   View,
//   Text,
//   ImageBackground,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Platform,
//   StatusBar
// } from 'react-native';
// import { moderateScale, verticalScale } from 'react-native-size-matters';
// import { BackIcon, EditIcon, SettingsIcon } from '../assets/svg';
// import Layout from '../common/Layout';
// import { themeColors } from '../theme/colors';
// import { Fontfamily } from '../theme/fontFamily';
// import { size } from '../theme/fontstyle';
// import { SCREENS } from '../typings/screens-enums';
// import StoryPosts from '../components/StoryPosts';
// import Tabs from '../common/Tabs';
// import { useState } from 'react';
// import { ProfileTabs } from '../const/profile';
// import {
//   selectSocialList,
//   selectSocialLoading,
// } from '../store/selectors/socialArtSelector';
// import { useDispatch, useSelector } from 'react-redux';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// import { fetchSocialArt } from '../store/slices/socialArtData';
// import { selectProfileList } from '../store/selectors/profileDetailSelector';
// import SectionHeader from '../common/SectionHeader';
// import { MoreIcon } from '../assets/svg/MoreIcon';
// const data = Array(5).fill({
//   id: Array.length,
//   title: 'Tom Bradley',
//   date: 'Wed,12 Jan  15:45',
//   heading: 'How do some influencers make money?',
//   description:
//     'We all see the glamorous lives of our favourite influencers and the lifestyles',
//   icon: <MoreIcon />,
// });

// type TrendingProps = {
//   title: string;
//   date: string;
//   heading: string;
//   description: string;
//   icon: any;
// };

// const Trending: React.FC<TrendingProps> = ({
//   title,
//   date,
//   heading,
//   description,
//   icon,
// }) => {
//   return (
//     <View style={styles.trendingView}>
//       <View style={styles.trendingContainer}>
//         <View style={styles.trendingCard}>
//           <Image
//             style={styles.trendingCardImage}
//             source={require('../assets/images/profile.png')}
//           />
//           <View style={styles.trendingViewText}>
//             <Text style={styles.trendingText}>{title}</Text>
//             <Text style={styles.trendingText}>{date}</Text>
//           </View>
//           <View style={styles.moreIcon}>{icon}</View>
//         </View>
//         <View style={styles.trendingheadingView}>
//           <Text style={styles.trendingTextMoney}>{heading}</Text>
//           <Text style={styles.trendingTextBottom}>
//             {description.length > 77
//               ? description.substring(0, 77) + '...'
//               : description}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };
// const Profile = () => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const { navigate, goBack } = useNavigation<any>();
//   const socialArtloading = useSelector(selectSocialLoading);
//   const socialArt = useSelector(selectSocialList);
//   const scrollViewRef = useRef(null);
//   const dispatch = useDispatch();

//   // const getWalletAddress = async () => {
//   //   // const value = await AsyncStorage.getItem('walletAddress');
//   //   console.log(value, 'getWallet');
//   //   if (value) {
//   //     dispatch(fetchProfileData());
//   //     console.log('value');
//   //   }
//   // };

//   const getProfileDetails = useSelector(selectProfileList);
//   console.log(getProfileDetails);

//   // useEffect(() => {
//   //   getWalletAddress();
//   // }, []);

//   return (
//     <Layout>
//       <StatusBar backgroundColor="transparent" translucent={true} />
//       <ScrollView
//         style={{ paddingBottom: 100 }}
//         ref={scrollViewRef}
//         onScroll={({ nativeEvent }) => {
//           const isCloseToBottom =
//             nativeEvent.layoutMeasurement.height +
//             nativeEvent.contentOffset.y >=
//             nativeEvent.contentSize.height - 20;
//           if (isCloseToBottom) {
//             dispatch(fetchSocialArt(socialArt.length));
//             console.log('Reached end of scroll view');
//           }
//         }}>
//         <ImageBackground
//           style={styles.profile}
//           source={require('../assets/images/profileBackground.png')}
//         // source={{uri: getProfileDetails.avatar}}
//         >
//           <ImageBackground
//             source={require('../assets/images/profileGradient.png')}>
//             <ImageBackground
//               style={styles.profileGradient}
//               source={require('../assets/images/profileGradient.png')}>
//               <View style={styles.header}>
//                 <TouchableOpacity onPress={goBack}>
//                   <BackIcon />
//                 </TouchableOpacity>
//                 <Text style={styles.headerTitle}>Profile</Text>
//                 <TouchableOpacity
//                   onPress={() => navigate(SCREENS.CREATENEWPOSTEDIT)}
//                   style={styles.headerButton}>
//                   <SettingsIcon />
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.profileContainer}>
//                 <View style={styles.profileHeading}>
//                   <Text style={styles.profileTitle}>
//                     {getProfileDetails.profileName}
//                   </Text>
//                   <View style={styles.profileEdit}>
//                     <Text style={styles.profileEditText}>
//                       Hey! Your a welcome :
//                     </Text>
//                     <TouchableOpacity
//                       onPress={() => navigate(SCREENS.CREATEPROFILE)}
//                       style={styles.headerButton}>
//                       <EditIcon />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </ImageBackground>
//         </ImageBackground>
//         <View style={styles.followingContainer}>
//           <View>
//             <Text style={styles.followingText}>Articles</Text>
//             <Text style={styles.followingCount}>1 294</Text>
//           </View>
//           <View>
//             <Text style={styles.followingText}>Followers</Text>
//             <Text style={styles.followingCount}>2 496</Text>
//           </View>
//           <View>
//             <Text style={styles.followingText}>Following</Text>
//             <Text style={styles.followingCount}>1 673</Text>
//           </View>
//         </View>

//         <Tabs
//           data={ProfileTabs}
//           activeTabIndex={activeTabIndex}
//           setActiveTabIndex={setActiveTabIndex}
//         />
//         {activeTabIndex == 0 && (
//           <>
//             <View style={styles.trandingComponent}>
//               <View style={styles.trending}>
//                 <ScrollView>
//                   {data.map(item => {
//                     return (
//                       <Trending
//                         icon={item.icon}
//                         title={item.title}
//                         date={item.date}
//                         heading={item.heading}
//                         description={item.description}
//                       />
//                     );
//                   })}
//                 </ScrollView>
//               </View>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </Layout>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   profile: {
//     height: moderateScale(250),
//   },
//   profileGradient: {
//     height: moderateScale(250),
//     paddingBottom: moderateScale(18),
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: moderateScale(24),
//     paddingVertical: moderateScale(20),
//   },
//   headerTitle: {
//     color: themeColors.primaryColor,
//     fontFamily: Fontfamily.Avenier,
//     fontWeight: '500',
//     fontSize: size.md,
//   },
//   headerButton: {},
//   headerButtonText: {
//     color: themeColors.aquaColor,
//     fontFamily: Fontfamily.Neuropolitical,
//     fontWeight: '400',
//     fontSize: size.default,
//   },
//   profileContainer: {
//     paddingHorizontal: moderateScale(24),
//   },
//   profileHeading: {
//     height: '90%',
//     justifyContent: 'flex-end',
//   },
//   profileTitle: {
//     color: themeColors.primaryColor,
//     fontFamily: Fontfamily.Neuropolitical,
//     fontWeight: '400',
//     fontSize: size.xxlg,
//     width: moderateScale(300),
//   },
//   profileEdit: {
//     marginTop: moderateScale(10),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   profileEditText: {
//     color: themeColors.primaryColor,
//     fontFamily: Fontfamily.Avenier,
//     fontWeight: '500',
//     fontSize: size.default,
//   },
//   followingContainer: {
//     flexDirection: 'row',
//     paddingLeft: moderateScale(24),
//     paddingTop: moderateScale(24),
//   },
//   followingText: {
//     fontFamily: Fontfamily.Avenier,
//     fontSize: size.md,
//     fontWeight: '500',
//     color: themeColors.garyColor,
//   },
//   followingCount: {
//     paddingRight: moderateScale(24),

//     fontFamily: Fontfamily.Grostestk,
//     fontSize: size.xxlg,
//     fontWeight: '500',
//     color: themeColors.primaryColor,
//   },
//   moreIcon: {
//     paddingLeft: moderateScale(130),
//   },
//   trandingComponent: {
//     marginTop: moderateScale(30),
//   },
//   trending: {
//     paddingHorizontal:
//       Platform.OS === 'ios' ? moderateScale(0) : moderateScale(6),
//     flexDirection: 'row',
//   },
//   trendingView: {
//     marginTop: moderateScale(10),
//     marginRight: moderateScale(8),
//     marginBottom: moderateScale(2),
//   },
//   trendingContainer: {
//     backgroundColor: themeColors.cardsColor,
//     // width: verticalScale(280),
//     paddingVertical: moderateScale(12),
//     paddingHorizontal: moderateScale(20),
//     borderRadius: 24,
//     justifyContent: 'space-between',
//   },
//   trendingCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: moderateScale(5),
//   },
//   trendingheadingView: {
//     paddingBottom: moderateScale(5),
//   },
//   trendingCardImage: {
//     height: verticalScale(30),
//     width: verticalScale(30),
//     borderRadius: 50,
//   },
//   trendingViewText: {},
//   trendingText: {
//     marginLeft: moderateScale(10),
//     color: themeColors.primaryColor,
//     fontFamily: Fontfamily.Avenier,
//     fontSize: size.default,
//     fontWeight: '500',
//   },
//   trendingTextMoney: {
//     color: themeColors.aquaColor,
//     fontFamily: Fontfamily.Neuropolitical,
//     fontSize: size.md,
//     marginTop: moderateScale(15),
//     marginBottom: moderateScale(10),
//   },
//   trendingTextBottom: {
//     color: themeColors.primaryColor,
//     fontFamily: Fontfamily.Avenier,
//     fontSize: size.s,
//     // lineHeight: 15,
//   },
// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})