/*
Now we will see how to add tabs to our app.
https://reactnavigation.org/docs/bottom-tab-navigator
`npm install @react-navigation/bottom-tabs@5.4.4`
We need to install it because each navigator is its own library.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
Tab has Group, Navigator and Screen, just like Stack.

In a <Tab.Navigator>, we have <Tab.Screen /> and each screen represents tab in our app.

And then we return 
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>

*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

const Account = () => (
  <Screen>
    <AppText>Account</AppText>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
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
