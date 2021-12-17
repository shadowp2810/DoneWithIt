/*
We will see how to use permissions api to get user permissions.

"expo-permissions has been deprecated in favor 
 of module-specific permissions methods 
 You should migrate from using Permissions.askAsync 
 and Permissions.getAsync to the permissions methods 
 exported by modules that require the permissions.
 For example: you should replace calls 
 to Permissions.askAsync(Permissions.CAMERA) 
 with Camera.requestPermissionsAsync()"

import * as Location from 'expo-location';

let { status } = await Location.requestForegroundPermissionsAsync();
if (status !== 'granted') {
  console.log('Permission to access location was denied');
  return;
}

  [CAMERA]: 'expo-camera',
  [CAMERA_ROLL]: 'expo-media-library',
  [MEDIA_LIBRARY]: 'expo-media-library',
  [MEDIA_LIBRARY_WRITE_ONLY]: 'expo-media-library',
  [AUDIO_RECORDING]: 'expo-av',
  [LOCATION]: 'expo-location',
  [USER_FACING_NOTIFICATIONS]: 'expo-notifications',
  [NOTIFICATIONS]: 'expo-notifications',
  [CONTACTS]: 'expo-contacts',
  [CALENDAR]: 'expo-calendar',
  [REMINDERS]: 'expo-calendar',
  [SYSTEM_BRIGHTNESS]: 'expo-brightness',
  [MOTION]: 'expo-sensors',
The request method entirely uses the request API.

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
