/*
React Native doesn't give us much in terms of accessing native device feautures.

https://reactnative.dev/docs/alert
On left side we see the core APIs
and there aren't many.
The other feautres like camera, context and location are not avaiable in core react native.

With 3rd party libraries from react native community like react native image picker
and with this we can access the camera.
Most of these require additional setup for ios or android projects.
Our options are to eject the reactnative app and continue work for each platform,
or we can use expo libraries.
Expo is a great productivity tool,
we can get more done in less time.

https://docs.expo.dev/versions/latest/
Calender, Camera, Contacts and so on.
These components are easy to use and well documented.
This list keeps growing as expo is under active development.

Before using any component have a look at Platform Compatibility table.

https://docs.expo.dev/versions/v44.0.0/sdk/imagepicker/
expo-image-picker provides access to the system's UI
for selecting images and videos from the phone's library or taking a photo with the camera.

`expo install expo-image-picker`

This component is copatible on all platforms.

When we want to acess sensitive information for a user,
we need thier permission, which we will look at next.

*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
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
