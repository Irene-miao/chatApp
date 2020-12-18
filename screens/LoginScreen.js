import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Chat App</Text>
        <View style={styles.row}>
          <Text style={styles.fieldTitle}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.fieldTitle}>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.logInButton} onPress={() => navigation.navigate("Chat")}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    margin: 40,
    fontWeight: "bold",
  },

  fieldTitle: {
    margin: 20,
    fontSize: 20,
  },

  input: {
    fontSize: 20,
    margin: 10,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    
  },

  logInButton: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: 80,
    height: 30,
  },

  buttonText: {
    fontSize: 15,
    color: "white",
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
