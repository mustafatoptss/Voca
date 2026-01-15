import { View, Text } from "react-native";
import { COLORS } from "../../themes/constants";
import { FONTS } from "../../themes/fonts";
import HomeHeader from "../components/HomeHeader";
import MainButton from "../components/MainButton";
import ProgressBoxHeader from "../components/ProgressBoxHeader";
import ProgressBoxes from "../components/ProgressBoxes";
import Card from "../components/Card";
import Feather from "react-native-vector-icons/Feather";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background.app,
        paddingVertical: 60,
        paddingHorizontal: 20,
      }}
    >
      <HomeHeader />
      <View style={{ marginTop: 20, flexDirection: "column", gap: 20 }}>
        <ProgressBoxHeader />
        <ProgressBoxes checkedCount={10} />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          Günün Egzersizi
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Card 
            text="Gerçek Hayat Senaryoları" 
            backgroundColor="#E6F8EF"
            subtext="Mülakat ve Sunum Egzersizleri" 
            iconName="chart-donut" 
            iconColor="#44b87eff" // Mavi
            width={160} // Tam genişlik denemesi
            height={160}
          />
       <Card 
            text="Gerçek Hayat Senaryoları" 
            backgroundColor="#E2F4FC"
            subtext="Mülakat ve Sunum Egzersizleri" 
            iconName="chart-donut" 
            iconColor="#3b82f6" // Mavi
            width={160} // Tam genişlik denemesi
            height={160}
          />
        </View>
      </View>
    </View>
  );
}
