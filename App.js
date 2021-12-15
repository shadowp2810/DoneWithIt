/*
Everytime we use formik, 
we have to pass a function and wrap our components with a fragment. 
This is ugly and unnecesary.
We want to use this component as a child of formik.
We use children prop to get children and render it inside.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
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
