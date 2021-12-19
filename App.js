/*
We can apply styles to the header using the options prop in Stack.Screen.

    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: route.params.id,
        headerStyle: { backgroundColor: "tomato" },
        headerShown: false,
      })}
    />

    But here the styles are only applied locally to that screen.
    We can apply it globally.
    In Stack.Navigator we set screenOptions prop with same params as with options. 

  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >

  And we can overide styles in individual Stack.Screen options within it.

  We can find the parameters we can give to options prop here 
  https://reactnavigation.org/docs/stack-navigator/#options

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
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: "1" })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <AppText>TweetDetails {route.params.id} </AppText>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: route.params.id,
      })}
    />
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerShown: false,
      }}
    />
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
