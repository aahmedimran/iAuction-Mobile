import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import SearchIcon from '../assets/svg/SearchIcon';
const Auction = () => {
  const [isFocused, setIsFocused] = useState('NFT');
  let categary = ['NFT', 'Music', 'Souvenirs'];
  const cardData = Array(5).fill({
    Name: 'ahmed',
    currantPrice: '12',
    timeLeft: '1d12h',
  });

  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingtexttren}>Trending</Text>
        <Text style={[styles.headingtexttren, styles.headingtextcol]}>
          collectibels
        </Text>
      </View>
      <View style={styles.SearchCointiener}>
        <View>
          <SearchIcon />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="SEARCH" />
        </View>
      </View>
      <View>
        <ScrollView horizontal style={styles.socialArtitems}>
          {categary?.map((val, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => setIsFocused(val)}>
                <Text
                  style={[
                    styles.categaryText,
                    isFocused === val ? styles.activeTab : null,
                  ]}>
                  {val}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View>
        <FlatList
          data={cardData}
          renderItem={({item}) => (
            <View>
              <Image
                style={styles.tinyLogo}
                source={require('../assets/images/image.png')}
              />
              <Text>{item.Name}</Text>
              <Text>{item.currantPrice}</Text>
              <Text>{item.timeLeft}</Text>
            </View>
          )}
          // keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
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
    fontFamily: 'av',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
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
    width: 50,
    height: 50,
  },
});
