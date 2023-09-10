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
import Button from '../common/Button';

type LoginProps = {
  setAlreadyUser?: Dispatch<SetStateAction<boolean>>;
};

const Login: React.FC<LoginProps> = ({setAlreadyUser}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Login</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter email"
          editable
          // multiline
          // numberOfLines={4}
          // maxLength={40}
          // onChangeText={text => onChangeText(text)}
          // value={value}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Password"
          editable
          // multiline
          // numberOfLines={4}
          // maxLength={40}
          // onChangeText={text => onChangeText(text)}
          // value={value}
          style={styles.TextInput}
        />
      </View>
      <Button title ='Login' containerStyle={styles.containerStyle}/>
    
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
    marginVertical: verticalScale(20),
  },
  TextInput: {
    padding: 10,
    borderBottomWidth: 2,
    marginHorizontal: moderateScale(20),
    color: themeColors.aquaColor,
  },
  containerStyle:{
    marginTop:40
  }
});
