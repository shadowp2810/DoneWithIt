/*
Text props
- numberOfLines​ , Here if text is long it gets truncated.
- onPress , A function is called on press.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Nisi ea amet cupidatat exercitation eiusmod est nostrud velit ea qui
        ipsum. Labore mollit minim ut duis excepteur esse. Eu elit exercitation
        non eiusmod sint consequat Lorem. Consectetur magna voluptate aliqua
        consectetur aliqua laboris pariatur enim ea. Sunt voluptate consectetur
        dolor tempor in ut. Lorem id sint minim eiusmod reprehenderit id
        occaecat laboris veniam officia nisi incididunt. Elit fugiat non
        occaecat commodo aute nisi non.
      </Text>
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
