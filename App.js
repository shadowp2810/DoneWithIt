/*
The first tab Listings, needs a stack navigator.
We build FeedNavigator.
In App Navigator we replace ListingsScreen with FeedNavigator.
In card component we need to add the onPress prop,
wrap the jsx in a touchable, and have onPress prop be whatever is defined to it,
by its consumer which is the Listings Screen.
Because we have registered Listing Screen with our navigator,
we have access to navigation prop,
and because ListingDetailsScreen is also registered to our navigator,
we have access to route prop.
  const listing = route.params;
and we pass the listing details dynamically.

We then set presentation mode to "modal" and hide header. 

*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/Text";
import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

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
const FeedNavigator = () => (
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
        headerShown: true,
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
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
      // tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

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
