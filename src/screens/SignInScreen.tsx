import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { useAuth } from "../contexts/Auth";
import { SignInScreenNavigationProp } from "../navigation/types";

type Props = {
  navigation: SignInScreenNavigationProp;
};

export const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = useAuth();

  const signIn = async () => {
    isLoading(true);
    try {
      await auth.signIn(email, password);
    } catch (error) {
      setError("Failed to sign in. Please check your email and password.");
    } finally {
      isLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {loading ? (
        <ActivityIndicator color={"#000"} animating={true} size="large" />
      ) : (
        <>
          <Button title="Sign In" onPress={signIn} color="#007bff"/>
          <View style={styles.textContainer}>
            <Text>Don't have an account? </Text>
            <Text style={styles.link} onPress={() => navigation.navigate("Sign Up Screen")}>Sign Up</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'baseline',
    fontSize: 16,
  },  
  link: {
    color: "#007bff",
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#007bff",
  },  
});
