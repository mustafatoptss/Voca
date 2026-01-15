import { View, Text, Pressable } from "react-native";

export default function LoginScreen({ onLogin }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, marginBottom: 20 }}>Welcome 🌿</Text>

      <View>
        <View>
          

        </View>
        <View>

        </View>
      </View>

      <Pressable
        onPress={onLogin}
        style={{
          backgroundColor: "#8BCFB3",
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Login</Text>
      </Pressable>
    </View>
  );
}
