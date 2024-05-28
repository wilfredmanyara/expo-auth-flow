import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { AuthStackParamList } from '../navigation/types';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={SignInScreen} />
      <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
