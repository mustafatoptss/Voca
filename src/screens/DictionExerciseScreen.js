import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Audio } from 'expo-av';
import ExerciseCard from '../components/ExerciseCard';
import { exercises } from '../data/exercises';
import ProgressContext from '../context/ProgressContext';

const DictionExerciseScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;

  const { dailyCount, incrementDailyCount, hasReachedLimit } = useContext(ProgressContext);

  const exerciseList = exercises[category];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Audio Recording State
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [isRecording, setIsRecording] = useState(false);
  
  // AI Simulation State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);


  useEffect(() => {
    requestPermission();
  }, []);

  async function startRecording() {
    if (hasReachedLimit) {
        Alert.alert("Limit Doldu", "Bugünkü 5 egzersiz hakkını tamamladın. Yarın tekrar gel!");
        return;
    }

    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
         Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setIsRecording(true);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setIsRecording(false);
    setIsAnalyzing(true);
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);

    setTimeout(() => {
      const mockResult = {
        text: exerciseList[currentIndex],
        words: exerciseList[currentIndex].split(' ').map(word => ({
          word,
          correct: Math.random() > 0.3,
        })),
        feedback: "Harika iş! Sadece birkaç kelimeye daha odaklanabilirsin."
      };
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
      incrementDailyCount(); // Increment progress after analysis
    }, 2000);
  }

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (currentIndex < exerciseList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnalysisResult(null);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnalysisResult(null);
    }
  };
  
  const progress = (dailyCount / 5) * 100;

  const renderAnalyzedText = () => {
    if (!analysisResult) {
      return <ExerciseCard text={exerciseList[currentIndex]} />;
    }
    return (
      <View style={styles.analyzedCard}>
        <Text style={styles.analyzedText}>
          {analysisResult.words.map((item, index) => (
            <Text key={index} style={{ color: item.correct ? 'green' : 'red' }}>
              {item.word}{' '}
            </Text>
          ))}
        </Text>
        <Text style={styles.feedbackText}>{analysisResult.feedback}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>
      <View style={styles.body}>
        {renderAnalyzedText()}
        {isAnalyzing ? (
            <Text>Analiz ediliyor...</Text>
        ) : (
            <View style={styles.controls}>
                <TouchableOpacity onPress={handlePrevious} disabled={currentIndex === 0}>
                    <Ionicons name="arrow-back-circle" size={50} color={currentIndex === 0 ? '#CCC' : '#007AFF'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.recordButton} onPress={isRecording ? stopRecording : startRecording} disabled={isAnalyzing}>
                    <Ionicons name="mic-circle" size={80} color={isRecording ? "#FFC300" : (hasReachedLimit ? '#CCC' : '#FF5A5F')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext} disabled={currentIndex === exerciseList.length - 1}>
                    <Ionicons name="arrow-forward-circle" size={50} color={currentIndex === exerciseList.length - 1 ? '#CCC' : '#007AFF'} />
                </TouchableOpacity>
            </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  backButton: {
    marginRight: 10,
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 40,
  },
  recordButton: {},
  analyzedCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  analyzedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feedbackText: {
      marginTop: 20,
      fontSize: 16,
      fontStyle: 'italic',
      color: '#555'
  }
});

export default DictionExerciseScreen;