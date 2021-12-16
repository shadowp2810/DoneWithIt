import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useFonts } from "expo-font";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    "Jura-BOLD": require("../assets/fonts/Jura-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      {(!fontsLoaded && (
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={defaultStyles.text}
          {...otherProps}
        />
      )) ||
        (fontsLoaded && (
          <TextInput
            placeholderTextColor={defaultStyles.colors.medium}
            style={styles.textInputStyled}
            {...otherProps}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInputStyled: {
    fontSize: 18,
    fontFamily: "Jura-BOLD",
    color: defaultStyles.colors.dark,
    width: "100%",
  },
});

export default AppTextInput;
