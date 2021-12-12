/*
We are using similar colors codes
in stylesheets throughout the application.
We extract the color codes and put them in a seperate file like colors.js
And have all the colors our application uses in a single place.
So if we decide to rebrand our app tomorrow,
we can do it in one place.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}
