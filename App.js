/*
To use custome fonts
https://docs.expo.dev/guides/using-custom-fonts/

fontFamily: "Courier" , is supported for iOS and not android.
fontFamily: "Roboto" , is supported for android and not iOS.
You must see supported system fonts and load by platform.

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "3%",
      }}
    >
      <Text
        style={{
          // fontFamily: "Montserrat",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          textTransform: "capitalize",
          textDecorationLine: "line-through",
          textAlign: "justify",
          lineHeight: 60, //for spacing between lines
        }}
      >
        I love React Native! Aliqua officia nulla duis veniam qui dolor occaecat
        commodo deserunt. Reprehenderit ipsum aliqua nulla ipsum. Cupidatat
        excepteur culpa fugiat velit ex deserunt mollit sint laboris incididunt
        minim enim ex.
      </Text>
    </View>

In react native unline css we don't have styling inheritance.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

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
      <Text
        style={{
          // fontFamily: "Montserrat",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          textTransform: "capitalize",
          textDecorationLine: "line-through",
          textAlign: "justify",
          lineHeight: 60, //for spacing between lines
        }}
      >
        I love React Native! Aliqua officia nulla duis veniam qui dolor occaecat
        commodo deserunt. Reprehenderit ipsum aliqua nulla ipsum. Cupidatat
        excepteur culpa fugiat velit ex deserunt mollit sint laboris incididunt
        minim enim ex.
      </Text>
    </View>
  );
}
