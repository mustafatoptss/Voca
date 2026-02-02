import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
  Dimensions,
  StatusBar
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { COLORS } from '../../themes/constants'; 

const { width, height } = Dimensions.get('window');

// Responsive boyutlandırma fonksiyonları
const scale = (size) => (width / 375) * size;
const verticalScale = (size) => (height / 812) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isSmallScreen = height < 700;

  const handleLogin = () => {
    // şimdilik direkt geçiyoruz
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F5F0" />
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>

            {/* LOGO */}
            <View style={[styles.logoContainer, isSmallScreen && styles.logoContainerSmall]}>
              <Image 
                source={require('../../assets/loginGorsel.webp')} 
                style={[styles.logoImage, isSmallScreen && styles.logoImageSmall]} 
              />
            </View>

            {/* FORM */}
            <View style={styles.formContainer}>

              <Text style={[styles.title, isSmallScreen && styles.titleSmall]}>
                Hoş Geldiniz!
              </Text>

              <Text style={[styles.subtitle, isSmallScreen && styles.subtitleSmall]}>
                Sesini keşfetmeye hazır mısın?
              </Text>

              {/* Email */}
              <View style={styles.inputWrapper}>
                <MaterialIcons 
                  name="mail" 
                  size={moderateScale(22)} 
                  color={COLORS.background.darkGreen}
                  style={styles.iconLeft} 
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email adresi"
                  placeholderTextColor="#9BAAA6"
                  value={username}
                  onChangeText={setUsername}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Şifre */}
              <View style={styles.inputWrapper}>
                <MaterialIcons 
                  name="lock" 
                  size={moderateScale(22)} 
                  color={COLORS.background.darkGreen} 
                  style={styles.iconLeft} 
                />
                <TextInput
                  style={styles.input}
                  placeholder="Şifre"
                  placeholderTextColor="#9BAAA6"
                  secureTextEntry={!isPasswordVisible}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Ionicons 
                    name={isPasswordVisible ? "eye" : "eye-off"} 
                    size={moderateScale(22)} 
                    color={COLORS.background.darkGreen}
                  />
                </TouchableOpacity>
              </View>

              {/* Şifremi unuttum */}
              <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>
                  Şifreni mi unuttun?
                </Text>
              </TouchableOpacity>

              {/* GİRİŞ */}
              <TouchableOpacity 
                style={styles.loginButton}
                onPress={handleLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.loginButtonText}>Giriş Yap</Text>
                <Ionicons name="arrow-forward" size={moderateScale(24)} color="#000" />
              </TouchableOpacity>

              {/* KAYIT */}
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Hesabın yok mu? </Text>
                <TouchableOpacity>
                  <Text style={styles.signupLink}>Kayıt Ol</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#E8F5F0' },
  scrollContent: { flexGrow: 1 },
  container: { flex: 1, backgroundColor: '#E8F5F0' },

  logoContainer: {
    alignItems: 'center',
    marginTop: verticalScale(40),
    marginBottom: verticalScale(15),
  },
  logoContainerSmall: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  logoImage: {
    width: width * 0.75,
    height: width * 0.75,
    maxWidth: 350,
    maxHeight: 350,
    borderRadius: moderateScale(30),
  },
  logoImageSmall: {
    width: width * 0.65,
    height: width * 0.65,
  },

  formContainer: {
    paddingHorizontal: scale(24),
    paddingBottom: verticalScale(20),
  },

  title: {
    fontSize: moderateScale(34),
    fontWeight: '900',
    textAlign: 'center',
    color: '#000',
  },
  titleSmall: { fontSize: moderateScale(28) },

  subtitle: {
    fontSize: moderateScale(15),
    textAlign: 'center',
    color: COLORS.background.darkGreen,
    marginBottom: verticalScale(30),
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: verticalScale(60),
    borderRadius: moderateScale(28),
    paddingHorizontal: scale(18),
    marginBottom: verticalScale(16),
  },

  iconLeft: { marginRight: scale(10) },

  input: {
    flex: 1,
    fontSize: moderateScale(15),
    color: '#000',
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: verticalScale(24),
  },

  forgotPasswordText: {
    color: COLORS.background.darkGreen,
    fontSize: moderateScale(13.5),
  },

  loginButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.background.button,
    height: verticalScale(60),
    borderRadius: moderateScale(28),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(20),
  },

  loginButtonText: {
    fontSize: moderateScale(17),
    fontWeight: '700',
    marginRight: scale(8),
    color: '#000',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  signupText: {
    color: COLORS.background.darkGreen,
    fontSize: moderateScale(14),
  },

  signupLink: {
    color: '#3FE09F',
    fontWeight: '700',
    fontSize: moderateScale(14),
  },
});
