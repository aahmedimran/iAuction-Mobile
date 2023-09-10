import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {themeColors} from '../theme/colors';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {Fontfamily} from '../theme/fontFamily';
import {size} from '../theme/fontstyle';
import Button from '../common/Button';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {UserLoginValue, UserSignUpValue} from '../typings/UserauthTypes';

const Auth = () => {
  const [alreadyUser, setAlreadyUser] = useState<boolean>(true);
  const [userSignUpValue, setuserSignUpValue] = useState<UserSignUpValue>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [userLoginValue, setUserLoginValue] = useState<UserLoginValue>({
    email: '',
    password: '',
  });
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={themeColors.aquaColor} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>I-Auction</Text>
        </View>
      </View>
      <View style={styles.childContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>I Auction</Text>
        </View>
        {alreadyUser ? (
          <Login />
        ) : (
          <Signup
            setuserSignUpValue={setuserSignUpValue}
            userSignUpValue={userSignUpValue}
          />
        )}
        {alreadyUser ? (
          <Button title="Login" containerStyle={styles.containerStyle} />
        ) : (
          <Button title="Sign Up" containerStyle={styles.containerStyle} />
        )}
        <View style={styles.textContainer}>
          {alreadyUser ? (
            <Text>Don't have an account </Text>
          ) : (
            <Text>Already have an account </Text>
          )}
          <TouchableOpacity onPress={() => setAlreadyUser(!alreadyUser)}>
            {alreadyUser ? (
              <Text style={styles.regButton}>Register here!</Text>
            ) : (
              <Text style={styles.regButton}>Login..</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.aquaColor,
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(40),
  },
  childContainer: {
    // height:"80%",
    backgroundColor: 'white',
    flex: 3.5,
    // borderWidth:5,
    // borderColor:"white",
    // borderTopStartRadius
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  heading: {
    color: 'white',
    fontFamily: Fontfamily.Neuropolitical,
    fontSize: size.xlg,
    fontWeight: 'bold',
  },
  containerStyle: {
    marginTop: 40,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(10),
  },
  regButton: {
    color: themeColors.aquaColor,
    fontSize: size.lg,
    fontFamily: Fontfamily.Avenier,
    fontWeight: 'bold',
  },
});
