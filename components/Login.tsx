import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'

type LoginProps = {
  setAlreadyUser?: Dispatch<SetStateAction<boolean>>,
}

const Login: React.FC<LoginProps> = ({ setAlreadyUser }) => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})