import React from "react";
const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");

const { default: LoginScreen } = require("../screens/LoginScreen");
const { default: RegisterScreen } = require("../screens/RegisterScreen");
const { default: WelcomeScreen } = require("../screens/WelcomeScreen");

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
