import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Applogo from '../assets/svg/Applogo';

const Auth = () => {
    const [alreadyUser, setAlreadyUser] = useState<boolean>(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={themeColors.aquaColor} />

            <View style={{}}>
            <Applogo/>
<Text>vkf efm</Text>
            </View>
            {alreadyUser ? <Login setAlreadyUser={setAlreadyUser} /> : <Signup setAlreadyUser={setAlreadyUser} />}


        </SafeAreaView>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.aquaColor
    }
})