import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Card = ({
  onPress, // New prop
  width = 140,
  height = 140,
  backgroundColor = "#E2F4FC",
  textColor = "#1f2937",
  subtextColor = "#64748b",
  text,
  subtext,
  iconName,
  iconColor = "#3b82f6",
}) => {
  const navigation = useNavigation();

  const navigateExercisePage = () =>{
    navigation.navigate('DictionExerciseScreen')
  }

  // If an onPress function is passed as a prop, use it.
  // Otherwise, use the default navigateExercisePage function.
  const handlePress = onPress || navigateExercisePage;

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.card, { width, height, backgroundColor }]}
    >
      {/* İkon Bölümü */}
      <View style={styles.topRow}>
        <View
          style={[styles.iconWrapper, { backgroundColor: iconColor + "20" }]}
        >
          <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
        </View>
      </View>

      {/* Metin Bölümü */}
      <View style={styles.content}>
        <Text
          style={[styles.mainText, { color: textColor }]}
          numberOfLines={2} // Maksimum 2 satır, sığmazsa ... koyar
          adjustsFontSizeToFit // Metin sığmazsa fontu otomatik küçültür (iOS özel)
        >
          {text}
        </Text>

        <Text
          style={[styles.subText, { color: subtextColor }]}
          numberOfLines={2}
        >
          {subtext}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24, // Daha yumuşak köşeler
    padding: 14,

    justifyContent: "space-between",
    // Gölge ayarları
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconWrapper: {
    padding: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    gap: 2, // Yazılar arası çok dar boşluk
  },
  mainText: {
    fontSize: 15, // 140px genişlik için ideal
    fontWeight: "700",
    lineHeight: 18, // Satır arası boşluk sığmaya yardımcı olur
    letterSpacing: -0.3,
  },
  subText: {
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 14,
    opacity: 0.8,
  },
});

export default Card;