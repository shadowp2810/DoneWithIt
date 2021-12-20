/*
We will now connect the backend.
in config, development.json, 
{
  "assetsBaseUrl": "http://192.168.1.5:9000/assets/",
  "port": 9000
}
assetsBaseUrl determins where our assets or images are served from,
We replace 192.168.0.14 with ip address of our machine, not localhost,
We set the port to what we want,
9000 is usually a unique port, if we have to change it we must change it in Url as well.

`node index.js` to start server.
Our backend doesn't really have a database,
it's a fake backend.
It was implemented this way because its a lot faster to get up and running.
So if we restart our server we loose the data we have created.

http://localhost:9000/api/listings

To call apis we are going to use a library called api sauce,
it is a wrapper arround axios,
which is a popular library for API calls.
It also gives us standardised errors,
and the ability to transform request and response objects.
https://github.com/infinitered/apisauce
A preference for apisauce is wenever we call server,
the underlying promise is always resolved,
even if we have an error,
so we don't have to add a try catch bock in our code.
We just take the response and see if there is an error.
`npm i apisauce@1.1.1`

Now we have methods like get post put and so on.
And whever we call server promise is always resolved.

When promise is resolved we get a response object
And instead of using a try catch block, we just check reponse.ok
And if it is not ok we look at response.problem


Problem is a string and it can be one of these values.
NONE             null               200-299       No problems.
CLIENT_ERROR     'CLIENT_ERROR'     400-499       Any non-specific 400 series error.
SERVER_ERROR     'SERVER_ERROR'     500-599       Any 500 series error.
TIMEOUT_ERROR    'TIMEOUT_ERROR'    ---           Server didn't respond in time.
CONNECTION_ERROR 'CONNECTION_ERROR' ---           Server not available, bad dns.
NETWORK_ERROR    'NETWORK_ERROR'    ---           Network not available.
CANCEL_ERROR     'CANCEL_ERROR'     ---           Request has been cancelled. Only possible if `cancelToken` is provided in config, see axios `Cancellation`.

Api sause gives us standardized errors.

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
