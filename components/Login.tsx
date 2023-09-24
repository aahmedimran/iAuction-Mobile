import {StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import {Fontfamily} from '../theme/fontFamily';
import {size} from '../theme/fontstyle';
import {UserLoginValue} from '../typings/UserauthTypes';
import EyeIcon from '../assets/svg/EyeIcon';
import HideeyeIcon from '../assets/svg/HideeyeIcon';

type LoginProps = {
  setUserLoginValue: Dispatch<SetStateAction<UserLoginValue>>;
  userLoginValue?: UserLoginValue;
  isEditable: boolean;
  valueError: any;
};

const Login: React.FC<LoginProps> = ({
  userLoginValue,
  setUserLoginValue,
  isEditable,
  valueError,
}) => {
  const [isVisable, setIsVisable] = useState<boolean>(true);

  return (
    <View
      style={{
        marginVertical: verticalScale(30),
        marginHorizontal: moderateScale(25),
      }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter email"
          editable={isEditable}
          onChangeText={text =>
            setUserLoginValue((prev: any) => ({
              ...prev,
              email: text,
            }))
          }
          value={userLoginValue?.email}
          style={[
            styles.TextInput,
            {backgroundColor: !isEditable ? '#d1d1d1' : 'white'},
          ]}
        />
        {valueError.email && (
          <Text style={styles.errorText}>{valueError.email}</Text>
        )}
        <View >
          <TextInput
            placeholder="Password"
            editable={isEditable}
            secureTextEntry={isVisable}
            onChangeText={text =>
              setUserLoginValue((prev: any) => ({
                ...prev,
                password: text,
              }))
            }
            value={userLoginValue?.password}
            style={[
              styles.TextInput,
              {
                backgroundColor: !isEditable ? '#d1d1d1' : 'white',
              },
            ]}
          />
          <Pressable style={{position:"absolute",right:moderateScale(10),top:verticalScale(15)}} onPress={()=>setIsVisable(!isVisable)}>
           {isVisable ? <EyeIcon /> : <HideeyeIcon />}
          </Pressable>
        </View>

        {valueError.password && (
          <Text style={styles.errorText}>{valueError.password}</Text>
        )}
      </View>
    </View>
  );
};

export default Login;

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
    borderBottomWidth: verticalScale(2),
  },
  errorText: {
    marginTop: verticalScale(4),
    color: 'red',
    fontSize: size.default,
    fontFamily: Fontfamily.Avenier,
  },
});
