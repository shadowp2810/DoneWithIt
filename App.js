/*
Currently we have just fields in our form, 
but as we start adding more, our code gets complex.
For every field we have to have a state variable,
and this can be painful.
So we use a popular library called Formik.
Formik takes care of all the complexity of building forms. 
It keeps track of form names and gives us validation out of the box.
Works with react and react native.
`npm i formik@2.1.4`
It is a named export.
import { Formik } from "formik";
handleChange, handleSubmit are functions formik gives us 
and with it we can keep track of state.
Our function should return a jsx expression.
handleChange is used for
              onChangeText={(text) => setEmail(text)}
              onChangeText={(text) => setPassword(text)}
so we rewrite as 
              onChangeText={handleChange("email")}
              onChangeText={handleChange("password")}
<AppButton title="Login" onPress={handleSubmit} /> calls
        onSubmit={(values) => console.log(values)}

With this we let formik keep track of state 
so we don't need useState anymore.

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
