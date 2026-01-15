import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Badge from './Badge';

const ProgressBoxHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:14,fontWeight:'bold'}}>30 GÜNLÜK SERÜVEN</Text>
      <View><Badge width={50} height={25} backgroundColor={"#E3FAED"} textColor={"#579D75"} text={"Day 5"}/></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  },
});

export default ProgressBoxHeader;