/*
Now that we have an API layer, lets get the listings from the server.
In ListingsScreen we
import listingsApi from "../api/listings";
and get rid of the cardcoded listings array.
In the component we decreate a statevariable to store the listings from the server.
We call our api first time component gets rendered, so we useEffect hook.
Executed only once first time component is rendered.   useEffect(()=>{}, [])
    listingsApi.getListings() returns a primse, but we cannot passa asynch function to a useEffect hook,
so we implement in another function.

We call our api, listingsApi.getListings();
we await it, await listingsApi.getListings();
and we get the response, const response = await listingsApi.getListings();
the response object has a property data which contains data from server.

We need to change prop in Card component in ListingsScreen
            image={item.image}
to       imageUrl={item.images[0].url}

We change same in Card component 
        <Image style={styles.image} source={image} />
to         <Image style={styles.image} source={{uri: imageUrl}} />
We cannot pass a string, we pass a object with uri property.

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
