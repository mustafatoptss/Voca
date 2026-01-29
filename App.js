import React from 'react';
import { SafeAreaView, StyleSheet, Alert, StatusBar } from 'react-native';
import LoginScreen from './src/screens/LoginScreen'; // Ekranı import ettik
import { COLORS } from './themes/constants';

export default function App() {
  
  // Login butonuna basılınca çalışacak fonksiyon
  const handleLoginPress = () => {
    // Test amaçlı bir uyarı kutusu çıkaralım
    Alert.alert("Başarılı", "Login butonuna bastın ve App.js bunu yakaladı! ");
    console.log("Kullanıcı giriş yapmaya çalıştı.");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar: Telefonun üstündeki saat/pil göstergesinin rengi */}
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      
      {/* Login Ekranını çağırıyoruz ve onLogin fonksiyonunu gönderiyoruz */}
      <LoginScreen onLogin={handleLoginPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
});