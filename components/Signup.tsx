import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {size} from '../theme/fontstyle';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Fontfamily} from '../theme/fontFamily';
import {UserSignUpValue} from '../typings/UserauthTypes';
import EyeIcon from '../assets/svg/EyeIcon';
import HideeyeIcon from '../assets/svg/HideeyeIcon';

type SignupProps = {
  setuserSignUpValue: Dispatch<SetStateAction<UserSignUpValue>>;
  userSignUpValue?: UserSignUpValue;
  valueError?: UserSignUpValue;
  isEditable?: boolean;
};
const Signup: React.FC<SignupProps> = ({
  setuserSignUpValue,
  userSignUpValue,
  valueError,
  isEditable,
}) => {
  const [isVisable, setIsVisable] = useState<boolean>(true);

  return (
    <View
      style={{
        marginVertical: verticalScale(20),
        marginHorizontal: moderateScale(25),
      }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>SignUp</Text>
      </View>
      <View>
        <TextInput
          placeholder="First Name"
          editable={isEditable}
          onChangeText={text => {
            setuserSignUpValue(prevUserSignUpValue => ({
              ...prevUserSignUpValue,
              firstName: text,
            }));
          }}
          value={userSignUpValue?.firstName || ''}
          style={[
            styles.TextInput,
            {backgroundColor: !isEditable ? '#d1d1d1' : 'white'},
          ]}
        />
        {valueError?.firstName && (
          <Text style={styles.errorText}>{valueError?.firstName}</Text>
        )}
        <TextInput
          placeholder="Last Name"
          editable={isEditable}
          onChangeText={text =>
            setuserSignUpValue((prevUserSignUpValue: any) => ({
              ...prevUserSignUpValue,
              lastName: text,
            }))
          }
          value={userSignUpValue?.lastName || ''}
          style={[
            styles.TextInput,
            {backgroundColor: !isEditable ? '#d1d1d1' : 'white'},
          ]}
        />
        {valueError?.lastName && (
          <Text style={styles.errorText}>{valueError?.lastName}</Text>
        )}
        <TextInput
          placeholder="Email"
          editable={isEditable}
          onChangeText={text =>
            setuserSignUpValue((prevUserSignUpValue: any) => ({
              ...prevUserSignUpValue,
              email: text,
            }))
          }
          value={userSignUpValue?.email}
          style={[
            styles.TextInput,
            {backgroundColor: !isEditable ? '#d1d1d1' : 'white'},
          ]}
        />
        {valueError?.email && (
          <Text style={styles.errorText}>{valueError?.email}</Text>
        )}
        <View >
        <TextInput
          placeholder="Password"
          secureTextEntry={isVisable}
          editable={isEditable}
          onChangeText={text =>
            setuserSignUpValue((prevUserSignUpValue: any) => ({
              ...prevUserSignUpValue,
              password: text,
            }))
          }
          value={userSignUpValue?.password}
          style={[
            styles.TextInput,
            {backgroundColor: !isEditable ? '#d1d1d1' : 'white'},
          ]}
        />
        <Pressable style={{position:"absolute",right:moderateScale(10),top:verticalScale(15)}} onPress={()=>setIsVisable(!isVisable)}>
           {isVisable ? <EyeIcon /> : <HideeyeIcon />}
          </Pressable>
        </View>
        {valueError?.password && (
          <Text style={styles.errorText}>{valueError?.password}</Text>
        )}
      </View>
    </View>
  );
};
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  text: {
    fontSize: size.xlg,
    fontWeight: 'bold',
    fontFamily: Fontfamily.Avenier,
    letterSpacing: 4,
  },
  TextInput: {
    padding: 10,
    borderBottomWidth: 2,
  },
  errorText: {
    marginTop: verticalScale(4),
    color: 'red',
    fontSize: size.default,
    fontFamily: Fontfamily.Avenier,
  },
});
