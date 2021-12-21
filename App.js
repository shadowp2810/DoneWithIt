/*
Whenever we go over the network we should always account for errors.
Currently if we turn the server off we get a blank window,
which is not good user experience.
Here we should tell the user we couden't get listings from the server.
And give them a chance to retry.

In lisingsScreen we declare another state variable initialised to false
When we call the server even if there is an error the promise is always resolved.
So that means we don't have to sourround the code with a try catch block,
which is what is great about apisauce.
    if (!response.ok) {
      setError(true);
    }
We can find the error with response.problem,
in this case we don't care about type of error,
we just want to tell user we coudent get listings from server.
We just return the error.
As a best practice always write error handling code first.
If we don't have error we setError(false)
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
