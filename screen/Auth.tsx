import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Applogo from '../assets/svg/Applogo';
import { Fontfamily } from '../theme/fontFamily';
import { size } from '../theme/fontstyle';

const Auth = () => {
    const [alreadyUser, setAlreadyUser] = useState<boolean>(true)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={themeColors.aquaColor} />
            <View style={{ alignItems: "center", marginTop: 70 }}><Text style={styles.heading}>I Auction</Text></View>
            {alreadyUser ? <Login setAlreadyUser={setAlreadyUser} /> : <Signup setAlreadyUser={setAlreadyUser} />}


        </SafeAreaView>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.aquaColor
    },
    heading: {
        color: "white",
        fontFamily: Fontfamily.Neuropolitical,
        fontSize: size.xlg,
        fontWeight: 'bold'
    }
})