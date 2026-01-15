import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const MainButton = ({text,icon}) => {
  return (
   <TouchableOpacity style={{width:100,height:40,backgroundColor:'green',justifyContent:'center', alignItems:'center',borderRadius:8}}>
    <Text style={{color:'white'}}>{text}</Text>
    
   </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
backgroundColor:'green'
  },
});

export default MainButton;