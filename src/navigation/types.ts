// navigation/types.ts

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  'Sign In Screen': undefined;
  'Sign Up Screen': undefined;
};

export type AppStackParamList = {
  // Define your App stack screens here, e.g.,
  'Home Screen': undefined;
  'Profile Screen': undefined;
};

export type SignInScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Sign In Screen'>;
export type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Sign Up Screen'>;

export type SignInScreenRouteProp = RouteProp<AuthStackParamList, 'Sign In Screen'>;
export type SignUpScreenRouteProp = RouteProp<AuthStackParamList, 'Sign Up Screen'>;
