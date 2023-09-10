import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import { size } from '../theme/fontstyle';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Fontfamily } from '../theme/fontFamily';
import { themeColors } from '../theme/colors';
import { UserSignUpValue } from '../typings/UserauthTypes';

type SignupProps = {
  setuserSignUpValue: Dispatch<SetStateAction<UserSignUpValue>>
  userSignUpValue?: UserSignUpValue;
}
const Signup: React.FC<SignupProps> = ({ setuserSignUpValue, userSignUpValue }) => {
  return (
    <View style={{ marginVertical: verticalScale(40) }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>SignUp</Text>
      </View>
      <View >

        <TextInput
          placeholder="First Name"
          editable
          onChangeText={text =>{
            setuserSignUpValue((prevUserSignUpValue) => ({
              ...prevUserSignUpValue,
              firstName: text,
              }))
          }
          }
          value={userSignUpValue?.firstName || ''}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Last Name"
          editable
          onChangeText={text => setuserSignUpValue((prevUserSignUpValue: any) => ({
            ...prevUserSignUpValue,
            lastName: text,
          }))}
          value={userSignUpValue?.lastName || ''}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Email"
          editable
          onChangeText={text => setuserSignUpValue((prevUserSignUpValue: any) => ({
            ...prevUserSignUpValue,
            email: text,
          }))}
          value={userSignUpValue?.email}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Password"
          editable
          onChangeText={text => setuserSignUpValue((prevUserSignUpValue: any) => ({
            ...prevUserSignUpValue,
            password: text,
          }))}
          value={userSignUpValue?.password}
          style={[styles.TextInput, { marginBottom: verticalScale(-20) }]}
        />
      </View>

    </View>
  );
}
export default Signup

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
    fontWeight: "bold",
    fontFamily: Fontfamily.Avenier,
    letterSpacing: 4
  },
  TextInput: {
    padding: 10,
    borderBottomWidth: 2,
    marginHorizontal: moderateScale(25),
    // marginVertical: moderateScale(5),

    color: themeColors.aquaColor,
  },
});