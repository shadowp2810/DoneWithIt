/*
In this lesson we will talk about aligning items in a container.

With this property justifyContent: "center",
we can align items in the main or primary axis.
As our flex direction is set to row, our main axis is horizontal.
If flex direction was set to column, our items would be in center of vertical axis.
With justifyContent we have flex-start by defaut, then flex-end, and center.
We also have space-between, space-arround, space-evenly.

With property alignItems: "center",
we can align items in the secondary or cross axis.
With baseline the base remains same for all views regardless of height difference. 
With flex-end items appear at end of vertical axis, and flex-start at start of vertical axis.

We use alignItems for whole container,
alignSelf for individual item.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar as StatusBarNative,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:
          Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 200,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 200,
          alignSelf: "flex-end",
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
