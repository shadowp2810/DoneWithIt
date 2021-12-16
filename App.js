/*
PickerItemComponent needs two props, label and onPress,
For <PickerItemComponent we set prop item={item},
so it only makes sence in context of category picker component.



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
