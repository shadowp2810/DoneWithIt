/*
If we add too many items in a flexDirection row or column,
the new item added at end 
and items at start will loose area on viewable screen.

To fix this we wrap the content.
But when we enable wraping, alignItems behaves differently.
If you have multiple lines,
the alighnItems property determins alignment of items within each line.
For 
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
flexWrap: "wrap",
within each line, items become vertically centered.
Adding multiple items of different height, 
all these items would be vertically centered.
So with alignItems property 
determins the alighnment of items along secondary axis within each line.

To put all these items in ceter of screen, we use different property,
called alignContent.
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
        flexDirection: "row", //horizontal
        justifyContent: "center", //entire content main
        alignItems: "center", //within each line
        alignContent: "center", //entire content corss
        flexWrap: "wrap", //items stay on screen
        paddingTop:
          Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
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
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
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
