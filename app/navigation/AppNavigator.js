import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
