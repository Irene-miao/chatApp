import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import firebase from "../database/firebaseDB";

 export default function ChatScreen() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }