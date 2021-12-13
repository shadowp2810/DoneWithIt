import React from "react";
import Constants from "expo-constants";
import { View, SafeAreaView, StyleSheet } from "react-native";

function Screen({ children, style: passedstyle }) {
  return (
    <SafeAreaView style={[styles.screen, passedstyle]}>
      <View style={passedstyle}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
