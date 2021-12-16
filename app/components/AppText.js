import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { useFonts } from "expo-font";

function AppText({ children, style: passedStyles, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    "Jura-BOLD": require("../assets/fonts/Jura-Bold.ttf"),
    "Jura-VariableFont_wght": require("../assets/fonts/Jura-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <Text style={[styles.textDefault, passedStyles]} {...otherProps}>
        {children}
      </Text>
    );
  } else {
    return (
      <Text style={[styles.textStyled, passedStyles]} {...otherProps}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  textStyled: {
    fontSize: 18,
    fontFamily: "Jura-BOLD",
    lineHeight: Platform.OS === "android" ? null : null,
  },
  textDefault: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    lineHeight: Platform.OS === "android" ? null : null,
  },
});

export default AppText;
