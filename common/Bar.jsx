import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Bar = ({ navigation }) => {
  return (
    <View style={styles.containerMain}>
    <View style={styles.container}>
      <Text style={styles.prText}> <Button
        title="Auction"
        onPress={() => navigation.navigate('Auction')}
      /></Text>
      <Text style={styles.prText}><Button
        title="Save"
        onPress={() => navigation.navigate('Save')}
      /></Text>
      <Text style={styles.prText}><Button
        title="Notification"
        onPress={() => navigation.navigate('Notification')}
      /></Text>
      <Text style={styles.prText}><Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      /></Text>
    </View>
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({

  containerMain: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  container: {
    marginHorizontal:50,
    paddingVertical: 20,
    flexDirection:'row',
    alignContent:'flex-end',
    justifyContent:'space-around',
    backgroundColor: 'black',
    width: 300,
    height:70,
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
   
  },
  prText: {
    color:'white',
   
  },
});
