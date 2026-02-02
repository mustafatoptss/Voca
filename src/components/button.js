import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS, SIZES } from '../../themes/constants'; // Renk ve boyutları çektik

const MyButton = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity 
      style={styles.buttonContainer} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* 1. Önce yazıyı göster */}
      <Text style={styles.buttonText}>{title}</Text>
      
      {/* 2. İkon varsa, yazının SAĞINA ekle */}
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Yazı ve ikonu yan yana dizer
    backgroundColor: '#2BEE9D', // Belirlediğimiz yeşil renk
    height: 55,
    borderRadius: 55, // Tam yuvarlak köşeler
    justifyContent: 'center', // İçeriği yatayda ortala
    alignItems: 'center', // İçeriği dikeyde ortala
    marginTop: 20,
    paddingHorizontal: 20, // Yanlardan biraz boşluk
    // İsteğe bağlı: Hafif bir gölge efekti için (iOS ve Android uyumlu)
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  iconWrapper: {
    marginLeft: 10, // İkonu yazıdan biraz uzaklaştır (Yazının sağında olduğu için margin-left)
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyButton;