import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function CreateAccountScreen() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create Account</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Text>Sign up with GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Text>Sign up with Google</Text>
      </TouchableOpacity>

      <Text style={styles.separator}>
        Or sign up with credentials
      </Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.passwordStrength}>
        Password Strength: Strong
      </Text>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setChecked(!checked)}
      >
        <Text style={styles.checkbox}>
          {checked ? "☑" : "☐"}
        </Text>
        <Text>I agree with the Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>
          Create Account
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20
  },

  socialButton: {
    backgroundColor: "#eee",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center"
  },

  separator: {
    textAlign: "center",
    marginVertical: 20,
    color: "gray"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },

  passwordStrength: {
    color: "green",
    marginBottom: 10
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },

  checkbox: {
    fontSize: 20,
    marginRight: 8
  },

  createButton: {
    backgroundColor: "#6A5AE0",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  createButtonText: {
    color: "white",
    fontWeight: "bold"
  }

});
