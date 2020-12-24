import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

function login() {
  Keyboard.dismiss();
  auth
  .signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  console.log("Signed in!");
})
.catch((error) => {
  console.log("Error!");
  console.log(error.message);
  setErrorText(error.message);
});
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Chat App</Text>
        <View style={styles.row}>
          <Text style={styles.fieldTitle}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
            placeholder="Enter Email"
            value={email}
            onChangeText={(input) => setEmail(input)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldTitle}>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="password"
          autoCorrect={false}
            placeholder="Enter Password"
            secureTextEntry={true}
            value= {password}
            onChangeText={(input) => setPassword(input)}
          />
        </View>
        <TouchableOpacity style={styles.logInButton} onPress={login}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    marginLeft: 15,
    fontWeight: "bold",
  },

  fieldTitle: {
    margin: 15,
    fontSize: 20,
  },

  input: {
    fontSize: 20,
    marginBottom: 15,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    padding: 4,
    height: 36,
    width: 200,
    backgroundColor: "white",
    margin: 15,
  },

  logInButton: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    margin: 15,
  width:80,
  },

  buttonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  errortext: {
    color: "red",
    height: 40,
  }
});
