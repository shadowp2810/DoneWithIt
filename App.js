/*
In react native we dont have style inheritance.
So we cannot apply text styles to parent component like in it's view.

To make sure text looks same on all screens 
we use a technique called encapsulating styles.
So we encapsulate all styles inside a custom text component.
Here lets call it AppText.
We can do same with the Heading as with Body.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import AppText from "./app/components/AppText";
import AppHeading from "./app/components/AppHeading";

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
      <AppHeading>Hi i am lorem</AppHeading>
      <AppText>
        I love React Native! Aliqua officia nulla duis veniam qui dolor occaecat
        commodo deserunt. Reprehenderit ipsum aliqua nulla ipsum. Cupidatat
        excepteur culpa fugiat velit ex deserunt mollit sint laboris incididunt
        minim enim ex.
      </AppText>
    </View>
  );
}
