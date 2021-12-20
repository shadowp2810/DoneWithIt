/*
A lot of people write code like this
apiClient.get("/listings").then((response) => {});
in their components and screens.
This is a bad practice for many reasons.
We shoulden't hardocde our endpoints,
for the same reason we shouden't hardocde our routes.
We can imporve this code by moving our endpoint somewhere else,
but still our components shouden't know how we get our data.
It shouden't know anything about the http protocol.
It shouden't know if it can send a post or put request.
It shouden't know anything about setting http headers,
because this violetes the seperation concerns principal.
Our components should have a single responsibility and that is the ui.
What it looks like and how it behaves, when user interacts with it.
How the data comes is not a responsibilty of react component.
A react component should talk to another object and say give me the listings or save this listings.
How that happens should be hidden from ui component.
What endpoint we call, what http verb we use, what headers we set.
Which is why we need a seperate api layer.
Our component should talk to this api layer to get or save the data.
That is proper architecture.

in api directory, we create a new file listings.js
and put our endpoints in here.
here we implement our logic and getting listings from server.
This logic should be encapsulated in our api layer.
hidden from our components.

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
