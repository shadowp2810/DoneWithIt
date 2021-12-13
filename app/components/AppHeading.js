import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { useFonts } from "expo-font";

function AppHeading({ children, style: passedStyles }) {
  let [fontsLoaded] = useFonts({
    "Syncopate-Bold": require("../assets/fonts/Syncopate-Bold.ttf"),
    "Syncopate-Regular": require("../assets/fonts/Syncopate-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <Text style={[styles.textDefault, { ...passedStyles }]}>{children}</Text>
    );
  } else {
    return (
      <Text style={[styles.textStyled, { ...passedStyles }]}>{children}</Text>
    );
  }
}

const styles = StyleSheet.create({
  textStyled: {
    fontSize: 25,
    fontFamily: "Syncopate-Bold",
    lineHeight: Platform.OS === "android" ? null : null,
    textTransform: "capitalize",
  },
  textDefault: {
    fontSize: 25,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    lineHeight: Platform.OS === "android" ? null : null,
  },
});

export default AppHeading;
