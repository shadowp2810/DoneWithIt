/*
https://reactnavigation.org/docs/hello-react-navigation
First we install stack navigator library.
`npm install @react-navigation/native-stack@5.3.5`
Each navigator is implemented in a seperate library.

const Stack = createNativeStackNavigator();
where Stack has Group, Navigator and Screen

This component is defined in the stack library
import { createNativeStackNavigator } from '@react-navigation/native-stack';

This component is defined in the main library
import { NavigationContainer } from '@react-navigation/native';

Other navigators like tab and drawer have same structure.

Instead of rendering specific screens like tweets or tweet details,
we are going to render StackNavigator.
This component knows how to navigate between different screens.

Because we use a StacNavigator we get a header on top,
and we can fully customize this. 
Background, foreground, style of text, add buttons to right or left.

Currently we need to reload app when we swap the order of StackScreens,
because the navigator is maintained in navigation state.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import AppText from "./app/components/Text";
import Screen from "./app/components/Screen";

const Tweets = () => (
  <Screen>
    <AppText>Tweets</AppText>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <AppText>TweetDetails</AppText>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
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
