/*
Can find expo vector icons here
https://icons.expo.fyi/

import { MaterialCommunityIcons } from "@expo/vector-icons";

<MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "3%",
      }}
    >
      <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
    </View>
  );
}
