/*
To create a code snippet,
go to Preferene->User Snippet->{The language we want}
in our case its javascript,
then 
{
  "Function Component": {
    "prefix": "rnfc",
    "body": [
      "import React from 'react';",
      "import { View, StyleSheet } from 'react-native';",
      "",
      "function ${TM_FILENAME_BASE}(props) {",
      "  return (",
      "    <View style={styles.container}>$0</View>",
      "  );",
      "}",
      "",
      "const styles = StyleSheet.create({",
      "  container: {}",
      "})",
      "",
      "export default ${TM_FILENAME_BASE};"
    ]
  }
where ${TM_FILENAME_BASE} replaces with filename automatically,
and $0 is where we want cursor to be,
and "", for empty line space.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return <AccountScreen />;
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
