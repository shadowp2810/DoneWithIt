/*
To implement navigation in our app,
we are going to use a popular library called React Navigation.
https://reactnavigation.org/

`npm install @react-navigation/native@5`

The libraries we will install now are react-native-screens and react-native-safe-area-context.

`expo install react-native-screens react-native-safe-area-context`

In react navigation we have three types of navigation.

- Stack Navigators,
  for taking the user from one screen to another,
  similar to navigator in web browsers,
  we can push or pop screens from stack.
- Tab Navigator, for implementing tabs.
- Drawer Navigator, for implementing drawer from left side of screen.

All these navigators are very similar.
In this course we will use stack and tab navigators.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";

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
