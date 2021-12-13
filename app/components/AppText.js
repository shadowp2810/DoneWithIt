import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { useFonts } from "expo-font";

function AppText({ children, style: passedStyles }) {
  let [fontsLoaded] = useFonts({
    "Jura-Medium": require("../assets/fonts/Jura-Medium.ttf"),
    "Syncopate-Regular": require("../assets/fonts/Syncopate-Regular.ttf"),
  });

  if (fontsLoaded) {
    return <Text style={[styles.textDefault, passedStyles]}>{children}</Text>;
  } else {
    return <Text style={[styles.textStyled, passedStyles]}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyled: {
    fontSize: 18,
    fontFamily: "Jura-Medium",
    lineHeight: Platform.OS === "android" ? null : null,
  },
  textDefault: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    lineHeight: Platform.OS === "android" ? null : null,
  },
});

export default AppText;
