/*
We don't want to set the width to 100% all the time.
Expecially for textboxes that take up 
all space but are only few charecters long. 
By default we set 100%, but unless a value is passed.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <ListingEditScreen />;
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
