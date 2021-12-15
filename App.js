/*
For every input field we have an onBlur, onChangeEvent and ErrorMessage.
This is bad, this is duplication.
We need to extract it into a reusable component.
Formik can use react context to pass the objects like 
handleChange, handleSubmit, errors, setFieldTouched, touched.
import { useFormikContext } from "formik";
And the we can consume those objects inside our custom component.
We use the spread operator to get the other props and put them in a single object.
Then we use the spread operator to pass those props into input component.
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
