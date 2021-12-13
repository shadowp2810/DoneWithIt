import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";

//rfs
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("Login Tapped")} />
        <AppButton
          color="secondary"
          title="Register"
          onPress={() => console.log("Register Tapped")}
        />
      </View>
    </ImageBackground>
  );
}

//rnss
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: "3%",
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: "10%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1.5,
    paddingVertical: "1%",
  },
});

export default WelcomeScreen;
