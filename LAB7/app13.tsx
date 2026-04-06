import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  Platform,
} from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const validateForm = () => {
    let newErrors: { username?: string; password?: string } = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted:", username, password);

      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <Image
          source={require("./assets/apple-3155_128.png")}
          style={styles.logo}
        />

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        {errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },

  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 30,
    resizeMode: "contain",
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },

  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginForm;
