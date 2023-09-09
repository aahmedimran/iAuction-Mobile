import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'

type SignupProps = {
  setAlreadyUser?: Dispatch<SetStateAction<boolean>>,
}

const Signup: React.FC<SignupProps> = ({setAlreadyUser}) => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})