/*
Add a jsconfig.json file to root directory to fix auto import 
issue, as by defauly vscode think its a typescript project.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
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
