/*
We use TexInput to get input from user.
It has some useful props like 
autocapitalize, autocorrect, autofocus.

TextInput has many props

keyboardType has
default, number-pad, decimal-pad, numeric, email-address, phone-pad

secureTextEntry
If true, the text input obscures the text entered 
so that sensitive text like passwords stay secure. The default value is false.

maxLength={20}
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import Screen from "./app/components/Screen";
import { Text, TextInput } from "react-native";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        maxLength={20}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}

// <View
//   style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "3%",
//   }}
// >
// </View>
