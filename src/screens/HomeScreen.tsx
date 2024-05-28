import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contexts/Auth';

export const HomeScreen = () => {
  const auth = useAuth();
  const navigation = useNavigation();

  const signOut = () => {
    auth.signOut();
  };

  const goToProfile = () => {
    // @ts-ignore
    navigation.navigate('Profile Screen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Home Screen</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Sign Out" onPress={signOut} />
        <Button title="Go to Profile" onPress={goToProfile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
