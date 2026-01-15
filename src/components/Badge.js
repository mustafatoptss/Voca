import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Badge = ({ text, backgroundColor, textColor, width, height }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          borderColor: backgroundColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Badge;
