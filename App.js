import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./src/navigation/MainTabs";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  



  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {loggedIn ? (
        <MainTabs />
      ) : (
        <LoginScreen onLogin={() => setLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}
