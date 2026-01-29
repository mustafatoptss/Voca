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
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import MyButton from '../components/button'; 
import { COLORS } from '../../themes/constants'; 

const { width, height } = Dimensions.get('window');

// Responsive boyutlandırma fonksiyonları
const scale = (size) => (width / 375) * size; // iPhone 11 Pro baz alınarak
const verticalScale = (size) => (height / 812) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Küçük ekranlar için özel kontrol
  const isSmallScreen = height < 700;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F5F0" />
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          bounces={false} 
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            
            {/* --- LOGO ALANI --- */}
            <View style={[styles.logoContainer, isSmallScreen && styles.logoContainerSmall]}>
               <Image 
                 source={require('../../assets/loginGorsel.webp')} 
                 style={[styles.logoImage, isSmallScreen && styles.logoImageSmall]} 
               />
            </View>

            {/* --- FORM ALANI --- */}
            <View style={styles.formContainer}>
              
              <Text style={[styles.title, isSmallScreen && styles.titleSmall]}>
                Hoş Geldiniz!
              </Text>
              <Text style={[styles.subtitle, isSmallScreen && styles.subtitleSmall]}>
                Sesini keşfetmeye hazır mısın?
              </Text>

              {/* Email Adresi */}
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
                  autoCorrect={false}
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
                  autoCorrect={false}
                />
                <TouchableOpacity 
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                   <Ionicons 
                     name={isPasswordVisible ? "eye" : "eye-off"} 
                     size={moderateScale(22)} 
                     color={COLORS.background.darkGreen}
                   />
                </TouchableOpacity>
              </View>

              {/* Şifremi mi unuttun? */}
              <TouchableOpacity 
                style={styles.forgotPasswordContainer}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.forgotPasswordText}>Şifreni mi unuttun?</Text>
              </TouchableOpacity>

              {/* Giriş Yap Butonu */}
              <TouchableOpacity 
                style={styles.loginButton} 
                onPress={onLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.loginButtonText}>Giriş Yap</Text>
                <Ionicons name="arrow-forward" size={moderateScale(24)} color="#000" />
              </TouchableOpacity>

              {/* Kayıt Ol Linki */}
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Hesabın yok mu? </Text>
                <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#E8F5F0',
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#E8F5F0',
  },

  logoContainer: {
    width: '100%', 
    alignItems: 'center', 
    marginTop: verticalScale(40), 
    marginBottom: verticalScale(15), 
  },

  logoContainerSmall: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },

  logoImage: {
    width: width * 0.75, // Ekran genişliğinin %75'i
    height: width * 0.75,
    maxWidth: 350,
    maxHeight: 350,
    borderRadius: moderateScale(30),
    resizeMode: 'cover',
  },

  logoImageSmall: {
    width: width * 0.65,
    height: width * 0.65,
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: scale(24),
    justifyContent: 'flex-start',
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(20),
  },
  
  title: {
    fontSize: moderateScale(34),
    fontWeight: '900',
    marginBottom: verticalScale(6),
    textAlign: 'center',
    color: '#000',
    letterSpacing: -0.5,
  },

  titleSmall: {
    fontSize: moderateScale(28),
  },

  subtitle: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    marginBottom: verticalScale(30),
    textAlign: 'center',
    color: COLORS.background.darkGreen,
  },

  subtitleSmall: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(20),
  },
  
  inputWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF',
    height: verticalScale(60),
    minHeight: 55,
    borderRadius: moderateScale(28),
    paddingHorizontal: scale(18),
    marginBottom: verticalScale(16), 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },

  iconLeft: {
    marginRight: scale(10), 
  },

  input: {
    flex: 1, 
    height: '100%', 
    fontSize: moderateScale(15),
    color: '#000',
    paddingVertical: 0,
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: verticalScale(24),
    marginTop: verticalScale(-4),
  },

  forgotPasswordText: {
    color: COLORS.background.darkGreen,
    fontSize: moderateScale(13.5),
    fontWeight: '500',
  },

  loginButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.background.button,
    height: verticalScale(60),
    minHeight: 55,
    borderRadius: moderateScale(28),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.background.button,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: verticalScale(20),
  },

  loginButtonText: {
    color: '#000',
    fontSize: moderateScale(17),
    fontWeight: '700',
    marginRight: scale(8),
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },

  signupText: {
    color: COLORS.background.darkGreen,
    fontSize: moderateScale(14),
  },

  signupLink: {
    color: '#3FE09F',
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
});