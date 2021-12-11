/*
There are times we need to detect which platform is running
and customize our styles and behaviour.

SafeAreaView only works for iOS.
So we need to manually add some padding on top.
This is where we add platform module.

example
paddingTop: Platform.OS === "android" ? 20 : 0,

But the proper way to do it is by caluculating and setting.
paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
Where StatusBarNative was StatusBar from react-native.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  SafeAreaView,
  Button,
  Platform,
  StatusBar as StatusBarNative,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello React Native!</Text>
      <Button
        color={"teal"}
        title="Click Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
});
