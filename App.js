/*
To inspect API calls:
When calling Apis sometimes things don't work as we expect.
To troubleshoot issues we want to know if our api was called or not.
If yes we want to look at the request and response objects.
We use another debuggin tool called react native debugger.
The standalone app based on official debugger of React Native, and includes React Inspector / Redux DevTools
So combines three debug tools inside a stand alone app.
`brew install --cask react-native-debugger`
This puts React Native Debugger.app in your /applications/ folder.

When we open react-native-debugger we see 3 debuggin tools in one place,
chrome dev tools, redux dev tools, and react dev tools.
We can toggle any tools we don't need by right click.
We see a message waiting for react to connect,
and we see it because our app isn't connected to this process.
On the top it says it is trying to connect on port 8081,
We have to open a new window and change port number.
We change it to 19000.
Then we enable remote debuggin in our app.
So js code gets executed inside this process.

We rightclick and say enable network inspect.
With this we can find out api requests under network tab.
We cna filter by xhr
We see the call to our listings api and the response from server.
As we know remote debugging makes app slow,
so when you are done, go back to app and stop remote debug.

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
