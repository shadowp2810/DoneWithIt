/*
const Tweets = ({ navigation }) => (
      onPress={() => navigation.navigate("TweetDetails")}
We can read about the navigation prop we are using here
https://reactnavigation.org/docs/navigation-prop

Below are common across all navigators
navigation
navigate - go to another screen, figures out the action it needs to take to do it
reset - wipe the navigator state and replace it with a new route
goBack - close active screen and move back in the stack
setParams - make changes to route's params
dispatch - send an action object to update the navigation state
setOptions - update the screen's options
isFocused - check whether the screen is focused
addListener - subscribe to updates to events from the navigators

For Stack navigator we have
navigation
replace - replace the current route with a new one
push - push a new route onto the stack
pop - go back in the stack
popToTop - go to the top of the stack

For Tab navigators we have
navigation
jumpTo - go to a specific screen in the tab navigator

the navigate methof makes sure we have a single instance 
of this route or screen on our stack.
Within Tweets if we did
    <Button title="View Tweet" onPress={() => navigation.navigate("Tweets")} />
It would do nothing.
But if we used push method instead,
    <Button title="View Tweet" onPress={() => navigation.push("Tweets")} />
it would take us to a new screen of the same with a back button.

This navigation prop is only available on our screen components.
That is in Stack.Screen,
so if we Tweets had a child component, 
that component wold not have access to navigation prop.
But we can use navigation hook to get access to navigation object.

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

where Link can have {navigation} prop so we use hook useNavigation.

and we can use <Link/> to replace the button in Tweets.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import AppText from "./app/components/Text";
import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Link />
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
