/*
Instead of displaying something on console lets display a standard alert box.
We replace console.log with alert.
      <Button
        color={"orange"}
        title="Click Me"
        onPress={() => alert("Button Tapped")}
      />


We import Alert, which is not a component but an api, an object with some methods.

Here we get an alert message with two buttons. 
      <Button
        color={"orange"}
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />

Now we look at prompt method which gives us an input box.
      <Button
        color={"orange"}
        title="Click Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
Here whatever we input and hit ok calls the callback function and displays text we typed.
Currently(2020 recording) this callback only works on ios and not and android.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <Button
        color={"orange"}
        title="Click Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
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
