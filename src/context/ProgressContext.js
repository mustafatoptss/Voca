import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [dailyCount, setDailyCount] = useState(0);
  const [lastResetDate, setLastResetDate] = useState(null);

  // Load initial data from AsyncStorage
  useEffect(() => {
    const loadProgress = async () => {
      const savedDate = await AsyncStorage.getItem('lastResetDate');
      const today = new Date().toISOString().split('T')[0];

      if (savedDate === today) {
        const savedCount = await AsyncStorage.getItem('dailyCount');
        setDailyCount(savedCount ? parseInt(savedCount, 10) : 0);
      } else {
        // It's a new day, reset the progress
        await AsyncStorage.setItem('lastResetDate', today);
        await AsyncStorage.setItem('dailyCount', '0');
        setDailyCount(0);
      }
      setLastResetDate(today);
    };

    loadProgress();
  }, []);

  const incrementDailyCount = async () => {
    const newCount = dailyCount + 1;
    setDailyCount(newCount);
    await AsyncStorage.setItem('dailyCount', newCount.toString());
  };
  
  const hasReachedLimit = dailyCount >= 5;

  return (
    <ProgressContext.Provider value={{ dailyCount, incrementDailyCount, hasReachedLimit }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
