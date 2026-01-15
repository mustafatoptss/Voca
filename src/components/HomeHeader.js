import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FONTS } from "../../themes/fonts";
import { COLORS } from "../../themes/constants";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Tekrar hoşgeldin</Text>
        <Text style={styles.title}>Merhaba Mustafa</Text>
      </View>
      <Image
        source={require("../../assets/avatar.jpg")}
        style={styles.profileImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: FONTS.family.bold,
    fontSize: FONTS.size.xl,
    color: COLORS.text.title,
  },
  subtitle: {
    fontFamily: FONTS.family.regular,
    fontSize: FONTS.size.md,
    color: COLORS.text.body,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default HomeHeader;
