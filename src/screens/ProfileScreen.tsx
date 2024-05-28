import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../contexts/Auth";

export const ProfileScreen = () => {
  const { authData } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      {authData && (
        <View>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{authData.name}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{authData.email}</Text>
          </View>
          {/* Add more profile information here if needed */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginRight: 10,
  },
  value: {},
});
