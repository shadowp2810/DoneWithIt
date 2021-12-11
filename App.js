/*
Now lets talk about Flex or Flexbox.
With Flex we can easily build complex layouts
that work consistently across different screen sizes.

We have the same concept in css,
but flex is css is a bit different.
<View style={{ backgroundColor: "dodgerblue", flex: 1 }}></View>
This sets backgroundColor to take up entire screen.
flex: 0.5 for half screen.

With Flex we typially sets up view as a container,
and then allign children inside that container.
<View style={{ backgroundColor: "#fff", flex: 1 }}>
<View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
<View style={{ backgroundColor: "gold", flex: 1 }} />
<View style={{ backgroundColor: "tomato", flex: 1 }} />
<StatusBar style="auto" />
</View>

With this screen is divided into three segments 
and each takes up third of screen.

Setting dodgerblue view to flex: 2 makes it 
twice as big as the other views.
<View style={{ backgroundColor: "dodgerblue", flex: 2 }} />
With this setup we are essentially dividing space into 4 segments.
2+1+1
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "dodgerblue", flex: 2 }} />
      <View style={{ backgroundColor: "gold", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
