/*
First we study the image picker in isolation.
In class components we have componentDidMouth method.
In functional component we have useEffect hook.
Function useEffect(() => {}) gets executed 
everytime component gets rendered.
We don't want to keep asking the user permission
and want to only do this first time component gets rendered.
useEffect(() => {}, []) means function get executed only once
as it is not dependednt on any variables.
So this is equivalent to componentDidMount.
ImagePicker.requestCameraPermissionsAsync()
as it is an async method we need to await it.
So when promise is resolved we get this await object.
useEffect function cannot accept a function that returns a promise,
and we can only return a function, which is used for cleaning up.
So when comopnent gets unmounted, this function gets executed.
So useEffect cannot be marked async.

*/

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
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
