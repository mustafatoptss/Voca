import { View, Text } from "react-native";
import { COLORS } from "../../themes/constants";
import { FONTS } from "../../themes/fonts";

export default function HomeScreen() {
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: COLORS.background.app,
      padding: 20
    }}>
      <Text style={{ 
        fontFamily: FONTS.family.semiBold,
        color: COLORS.brand.primaryMint, 
        fontSize: 24 
      }}>
        Home
      </Text>
    </View>
  );
}