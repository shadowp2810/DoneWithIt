/*

*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppTextSystem from "./app/components/AppTextSystem/AppTextSystem";

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
      <AppTextSystem>Hi there, this is react native.</AppTextSystem>
    </View>
  );
}
