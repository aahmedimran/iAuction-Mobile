import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Biometrics from 'react-native-biometrics';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
const Biomatric = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState('');
  const rnBiometrics = new ReactNativeBiometrics();


  let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
  let payload = epochTimeSeconds + 'some message';
  const handleBiometricAuth = async () => {
    // const rnBiometrics = new ReactNativeBiometrics({
    //   allowDeviceCredentials: true,
    // });
    // rnBiometrics.isSensorAvailable();
    rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
  .then((resultObject) => {
    const { success,  } = resultObject
    if (success) {
      console.log('successful biometrics provided')

      rnBiometrics.createKeys()
      .then((resultObject) => {
        const { publicKey } = resultObject
        console.log(publicKey)
        // sendPublicKeyToServer(publicKey)
      })











    } else {
      console.log('user cancelled biometric prompt')
    }
  })
  .catch(() => {
    console.log('biometrics failed')
  })


  // try {
  //   console.log("aaaa")
  //   const { success, publicKey } = await rnBiometrics.simplePrompt('Scan your fingerprint to continue.');
  //   if (success) {
  //     console.log(publicKey,"publicKey");
  //   //   setMessage(`Fingerprint scan successful. Fingerprint value: ${publicKey}`);
  //   // } else {
  //     setMessage('Fingerprint scan failed.');
  //   }
  // } catch (error) {
  //   setMessage(`Fingerprint scan error: ${error.message}`);
  // }
  };

  return (
    <View>
      <Text>Biomatric</Text>
      {!authenticated ? (
        <TouchableOpacity onPress={handleBiometricAuth}>
          <Text>Authenticate with TouchID</Text>
        </TouchableOpacity>
      ) : (
        <Text>You have been authenticated with TouchID!</Text>
      )}
    </View>
  );
};

export default Biomatric;

const styles = StyleSheet.create({});
