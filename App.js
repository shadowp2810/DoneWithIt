/*
https://docs.expo.dev/versions/latest/react-native/switch/

Switch is a component we use to capture a boolean value.
It has a different look on ios and android.

Switch on ios is on left side, on android is on right side.

      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />

We set the state variable using value prop 
and then handle the onValueChange envent to update state variable.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import Screen from "./app/components/Screen";
import { Switch } from "react-native";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
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
