/*
We have covered the essential properties of flex,
but there are three others to know in case you come across them in others code.

With flexBasis we can set size of item along primary axis.
With flex direction as row, our primary axis is horizontal,
setting flexbasis to 100, is equivalent to setting width to 100.
If primary axis was vertical, setting flexBasis is equivalent to setting height.

Setting flexGrow is same as setting flex property.
flex: 1 and flexGrow: 1

Setting flexShirk says if there are other items on screen,
it can grow to maximum while keeping other items on screen.

Flex is a shorthand for flexgrow and flexshrink.
Setting , flex: -1 , to a negative number is same as using flexShrink.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar as StatusBarNative,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", //horizontal
        justifyContent: "center", //entire content main
        alignItems: "center", //within each line
        paddingTop:
          Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
