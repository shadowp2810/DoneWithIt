/*
Our current way of dyanamically setting properties works fine
if we are setting one or two properties.
But the more properties we want to customize for our platforms,
our code become unmaintainable.

To solve this problem we can use Platform.select method.
As select method returns an object, 
we spead that object ...Platform.select , 
to copy its properties into this object.

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

There is another method to seperate platform specific styles.
We can take a file like AppTextSystem.js 
and have platform specific files like AppTextSystem.ios.js or AppTextSystem.android.js  
that get picked automatically on import,
so we no longer need Platform.select 

For android 
const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppTextSystem from "./app/components/AppTextSystem";

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
      <AppTextSystem>Hi there this is native.</AppTextSystem>
    </View>
  );
}
