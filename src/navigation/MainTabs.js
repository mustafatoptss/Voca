import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import the HomeStackScreen component
import HomeStackScreen from './HomeStack'; // Correct path to HomeStack.js

import StatsScreen from '../screens/StatsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* Use HomeStackScreen for the Home tab */}
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="StatsScreen" component={StatsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}