import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../common/Layout'
import { SCREENS } from '../typings/screens-enums'
import { useNavigation } from '@react-navigation/native'
import Header from '../common/Header'
import CameraIcon from '../assets/svg/CameraIcon'

const Biddies = () => {
  const navigate = useNavigation<any>()
  return (
    <Layout>
    <Header
        title={false}
        centerTitle='Biddies'
        leftChildren={
            <Pressable onPress={() => navigate(SCREENS.PROFILE)}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' }}
                />
            </Pressable>
        }
        rightChildren={
            <Pressable onPress={() => navigate(SCREENS.AUCTION)}>
                <CameraIcon />
            </Pressable>
        }
    />
</Layout>
  )
}

export default Biddies

const styles = StyleSheet.create({})