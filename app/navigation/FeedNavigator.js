import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "transparentModal",
      headerShown: false,
      gestureEnabled: true,
      // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <Stack.Screen name="Listings" component={ListingsScreen} options={{}} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ presentation: "modal" }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
