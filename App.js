/*
Now we will style the tabs.
The navigator component has an option called tabBarOptions -> screenOptions,
The list of the options and their new name from v5 to v6 are follows:

activeBackgroundColor -> tabBarActiveBackgroundColor
activeTintColor -> tabBarActiveTintColor
allowFontScaling -> tabBarAllowFontScaling
iconStyle -> tabBarIconStyle
inactiveBackgroundColor -> tabBarInactiveBackgroundColor
inactiveTintColor -> tabBarInactiveTintColor
keyboardHidesTabBar -> tabBarHideOnKeyboard
labelPosition -> tabBarLabelPosition
labelStyle -> tabBarLabelStyle
showLabel -> tabBarShowLabel
style -> tabBarStyle
tabStyle -> tabBarItemStyle

For each tabScreen we can set the icon size to what we like
or destructure the size recommended by react navigation and set that.
We can also do same with color, which react navigation picks 
based on what we set in screenOptions.
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}

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
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
      // tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
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
