/*
Setting top, bottom, left, right,
moves the position of the view relative to its original position,
without effecting the position of views arround it.
          top: -20,

This happens because all views by default in react native use relative potioning.
          position: "relative",

Setting position to absolute, moves the position of view realative to entire screen.
And as a result of its positioning the other views move around.
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
        paddingTop:
          Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          top: -20,
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
