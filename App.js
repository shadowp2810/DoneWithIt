/*
Our components folder has been growing,
and we have a mixture of reusable components.
Some for Forms, some for Lists.
We reorganize into different namespaces.
We move components one by one to make sure it works.
We move AppForm, AppFormField, ErrorMessage, 
and SubmitButton into form folder.
What we move is up subjective.
We create an index.js file, 
import all the components and re-export them.
With this we can easily import the form component in other components.
We can now remove three import statements from LoginForm. 

We do same with lists.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
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
