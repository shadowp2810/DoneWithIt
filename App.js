/*
Everytime we add a button, 
we have to set it's onPress prop to handlesubmit.
This is repetitive.
We we encapsulate it inside a resuable component.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
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
