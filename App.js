/*
In this section the styles will be inline,
but in a real setting you should define it in stylesheets.

<View
  style={{
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 10,
    borderTopWidth: 20,
    borderTopLeftRadius: 50,
  }}
></View>
We can customize the top left, top right, bottom left, bottom right corners of border.
    
To draw a radius you need a radius that is atleast half the size of box.
So for circle
<View
  style={{
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 50,
  }}
></View>
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
}
