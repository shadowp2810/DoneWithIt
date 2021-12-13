/*
Use Custom Button On Welcome Screen
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

// <View
//   style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "3%",
//   }}
// >

// </View>
