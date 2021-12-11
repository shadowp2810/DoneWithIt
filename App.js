/*
Now we talk about the button component.

Each platform has a different way of presenting this button component.
As the button component gets mapped to its native equivalent.
We can change color that gets effected both platforms.
      <Button
        color={"orange"}
        title="Click Me"
        onPress={() => console.log("Button Tapped")}
      />

We can also create buttons with unique look and feel,
which we look at later.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <Button
        color={"orange"}
        title="Click Me"
        onPress={() => console.log("Button Tapped")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
