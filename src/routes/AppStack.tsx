import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AppStackParamList } from '../navigation/types';
import { ProfileScreen } from '../screens/ProfileScreen';


const Stack = createStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
