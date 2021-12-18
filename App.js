/*
Currently if we want to get users location,
we have to write a lot of same code there,
instead we can use a custom hook.
Using custom hooks we can encapsulate state,
some logic arround that state,
inside a single reusable function.
In app folder we add a new folder called hooks.
All hooks should start with hooks as that is the convention.

We can reuse this hook in many places.

If the prise we get here
      const { granted } = await Location.requestForegroundPermissionsAsync();
is unresolved we will have a problem, so we wrap it in a try catch.

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
