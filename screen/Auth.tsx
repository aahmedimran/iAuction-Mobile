import {
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
import {useDispatch, useSelector} from 'react-redux';
import {getUserProfile} from '../store/Thunks/AuthThunks';
import {selectuserLoading} from '../store/selectors/Authselectors';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../typings/screens-enums';
import {signupUser} from '../services/Authapi';
import {emailRegex, showToast} from '../common/reuseableFunction';

const Auth = () => {
  const {navigate} = useNavigation<any>();
  const dispatch = useDispatch();
  const loading = useSelector(selectuserLoading);
  const [isLoading,setIsLoading]=useState<boolean>(false)
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
  const [valueError, setValueError] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

const handleAlreadyUser =()=>{
  setValueError({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  setAlreadyUser(!alreadyUser)
}

  const handleLogin = async () => {
    setValueError({
      email: '',
      password: '',
    });
    if (!userLoginValue?.email) {
      setValueError((prev: any) => {
        return {
          ...prev,
          email: 'Please enter Vaild Email',
        };
      });
    }
    if (!userLoginValue?.password) {
      setValueError((prev: any) => {
        return {
          ...prev,
          password: 'Please enter Vaild Password',
        };
      });
    }
    if (!emailRegex.test(userLoginValue.email)) {
      setValueError((prev: any) => {
        return {
          ...prev,
          email: 'Please enter Vaild Email',
        };
      });
    }
    if (
      !userLoginValue?.email ||
      !userLoginValue?.password ||
      !emailRegex.test(userLoginValue.email)
    ) {
      return;
    }

    try {
      await dispatch(
        getUserProfile({
          email: userLoginValue.email,
          password: userLoginValue.password,
        }),
      ).unwrap();
      navigate(SCREENS.AUCTION);
    } catch (err: any) {
      console.log(err, 'err');
      if (err.code === 'auth/email-already-in-use') {
        showToast('That email address is already in use!');
      }
      if (err.code === 'auth/invalid-email') {
        showToast('That email address is invalid!');
      }
      if (err.code === 'auth/user-not-found') {
        showToast('user not found');
      }
    }
  };

  const handleSignup = async () => {
    setValueError({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    if (!userSignUpValue?.firstName) {
      setValueError((prev: any) => {
        return {
          ...prev,
          firstName: 'Please enter firstName',
        };
      });
    }
    if (!userSignUpValue?.lastName) {
      setValueError((prev: any) => {
        return {
          ...prev,
          lastName: 'Please enter lastName',
        };
      });
    }
    if (!userSignUpValue?.email) {
      setValueError((prev: any) => {
        return {
          ...prev,
          email: 'Please enter Vaild Email',
        };
      });
    }
    if (!userSignUpValue?.password) {
      setValueError((prev: any) => {
        return {
          ...prev,
          password: 'Please enter Vaild Password',
        };
      });
    }
    if (!emailRegex.test(userSignUpValue.email)) {
      setValueError((prev: any) => {
        return {
          ...prev,
          email: 'Please enter Vaild Email',
        };
      });
    }
    if (
      !userSignUpValue?.firstName ||
      !userSignUpValue?.lastName ||
      !userSignUpValue?.email ||
      !userSignUpValue?.password ||
      !emailRegex.test(userSignUpValue.email)
    ) {
      return;
    }

    try {
      setIsLoading(true)
       await signupUser({
        firstName: userSignUpValue?.firstName,
        lastName: userSignUpValue?.lastName,
        email: userSignUpValue.email,
        password: userSignUpValue.password,
      });
      setValueError({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      setIsLoading(false)
      setAlreadyUser(!alreadyUser)
    } catch (err: any) {
      console.log(err, 'err');
      setIsLoading(false)
      if (err.code === 'auth/email-already-in-use') {
        showToast('That email address is already in use!');
      }
      if (err.code === 'auth/invalid-email') {
        showToast('That email address is invalid!');
      }
      if (err.code === 'auth/user-not-found') {
        showToast('user not found');
      }
      if (err.code === 'auth/weak-password') {
        showToast('Password should be at least 6 characters');
      }
    }
  };

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
          <Login
            userLoginValue={userLoginValue}
            setUserLoginValue={setUserLoginValue}
            isEditable={loading ? false : true}
            valueError={valueError}
          />
        ) : (
          <Signup
            setuserSignUpValue={setuserSignUpValue}
            userSignUpValue={userSignUpValue}
            isEditable={isLoading ? false : true}
            valueError={valueError}

          />
        )}
        {alreadyUser ? (
          <Button
            title="Login"
            containerStyle={styles.containerStyle}
            loading={loading}
            isdisabled={loading}
            onPress={() => handleLogin()}
          />
        ) : (
          <Button
            title="Sign Up"
            containerStyle={styles.containerStyle}
            loading={isLoading}
            isdisabled={isLoading}
            onPress={() => handleSignup()}
          />
        )}
        <View style={styles.textContainer}>
          {alreadyUser ? (
            <Text>Don't have an account </Text>
          ) : (
            <Text>Already have an account </Text>
          )}
          <TouchableOpacity
            onPress={ handleAlreadyUser}
            disabled={loading || isLoading ? true : false}>
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
    marginBottom:verticalScale(-20)
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(40),
  },
  childContainer: {
    backgroundColor: 'white',
    flex: 3.5,
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
