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
import { SignUpScreenNavigationProp } from "../navigation/types";

type Props = {
  navigation: SignUpScreenNavigationProp;
};

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = useAuth();

  const signUp = async () => {
    isLoading(true);
    try {
      await auth.signUp(email, password, name);
      setError("");
    } catch (error) {
       setError("Failed to sign up. Please check your email and password");
    } finally {
      isLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      {loading ? (
        <ActivityIndicator color={"#000"} animating={true} size="small" />
      ) : (
        <>
        <Button title="Sign Up" onPress={signUp} />
        <View style={styles.textContainer}>
            <Text>Already Have an Account? </Text>
            <Text style={styles.link} onPress={() => navigation.navigate("Sign In Screen")}>Sign In</Text>
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
  input: {
    height: 40,
    width: "80%", 
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
