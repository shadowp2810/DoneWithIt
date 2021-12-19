/*
We can use Nested vavigators to have the tab bar take us to a stack navigator.
Each tab can take us to a different stack navigator.
We can name the stack navigators appropriately.
The Feed tab takes us to FeedNavigator,
the Account tab takes us to the AccountNavigator.
We call this Nesting Navigators.
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
