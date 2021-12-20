/*
We should get rid of hardcoded routings.
If we have a typo our app isn't going to work,
and the only way to find it is to test all features of app.
And if tomorrow e decide to rename this route to something else,
we have to rename all instances of this route.
So we store all routes in a single place in app.

WE use uppercase letters to indicate its a constant,
To prevent other modules from accidently modifying this property,
we use Object.Freeze method,
which ensured the object we pass here cannot be modified anywher in app,

*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
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
