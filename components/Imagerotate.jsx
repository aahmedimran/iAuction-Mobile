import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const Imagerotate = () => {

    const [rotation, setRotation] = useState(new Animated.Value(0));

    const rotateImage = () => {
      Animated.timing(rotation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setRotation(new Animated.Value(0));
      });
    };
    const interpolatedRotateAnimation = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });
  return (
    <View>
      <Text>Imagerotate</Text>
      <View>
      <TouchableOpacity onPress={rotateImage}>
        <Animated.Image
          style={{ transform: [{ rotate: interpolatedRotateAnimation }] }}
          source={require('../assets/images/a.jpg')}
        />
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Imagerotate

const styles = StyleSheet.create({})