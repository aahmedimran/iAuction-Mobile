import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import {Fontfamily} from '../theme/fontFamily';
import {themeColors} from '../theme/colors';
import { size } from '../theme/fontstyle';

type SignupProps = {
  setAlreadyUser?: Dispatch<SetStateAction<boolean>>,
}

const Login:React.FC<SignupProps>=({}) => {
  return (
    <View style={{marginVertical:verticalScale(40)}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View >
        <TextInput
          placeholder="Enter email"
          editable
          // onChangeText={text => onChangeText(text)}
          // value={value}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Password"
          editable
          // onChangeText={text => onChangeText(text)}
          // value={value}
          style={[styles.TextInput,{marginTop:verticalScale(20),marginBottom:verticalScale(-20)}]}
        />
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
  text:{
    fontSize:size.xlg,
    fontWeight:"bold",
    fontFamily:Fontfamily.Avenier,
    letterSpacing:4
  },
  TextInput: {
    padding: 10,
    borderBottomWidth: 2,
    marginHorizontal: moderateScale(25),
    // marginVertical: moderateScale(5),

    color: themeColors.aquaColor,
  },
});
