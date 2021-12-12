/*
To apply shadows we have different properties for iOS and android.

In iOS to apply a shadow you need atleast 3 properties.
shadowColor: "grey",
shadowOffset: { width: 10, height: 10 },
shadowOpacity: 1, //Between 0 - 1 for visibility

Changing offset to width: 0 puts shadow below under the view, minus for left.

With , shadowRadius: 10, we can make shadow softer.

In android we only have , elevation: 10 , to set a kind of shadow.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10, //android's only shadow effect
        }}
      ></View>
    </View>
  );
}
