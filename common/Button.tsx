import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import { size } from '../theme/fontstyle'

type ButtonProps = {
    title?: string;
    isdisabled?: boolean;
    loading?: boolean;
    containerStyle:any
}

const Button: React.FC<ButtonProps> = ({ title, isdisabled, loading,containerStyle }) => {
    return (
        <TouchableOpacity style={{...styles.container,...containerStyle}} disabled={isdisabled}>
            {loading ?
                <ActivityIndicator size="small" color="#ffff" />
                :
                <Text style={styles.headingText}>{title}</Text>
            }

        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        marginVertical:verticalScale(5),
        alignItems: 'center',
        backgroundColor: '#29AAE1',
        marginHorizontal: moderateVerticalScale(20),
        padding: 10,
        borderRadius: 20,
    },
    headingText: {
        color: 'white', fontWeight: "bold", fontSize: size.lg
    }
})