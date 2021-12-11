/*
There are times we need to rotate our screen orientation
and resize components accordingly.

Suppose we set width: "100%", height: "30%"
Maybe this is a video player.
Now in Landscape mode the size becomes weird.
This is where we need to detect the orientation of screen and resize component accordingly.

To support different orientations we go to app.json.
By default it is set to portrait.
We set to default to support both modes.

To detect this orientation we use library hooks
developed by react native community.
Hooks are functions that bring extra functionality to function components.
https://github.com/react-native-community/hooks
All hooks start with use.
We have
useAccessibilityInfo , useAppState , useBackHandler , useCameraRoll ,
useClipboard , useDimensions , useImageDimensions, useKeyboard ,
useInteractionManager , useDeviceOrientation , useLayout

we install
`npm install @react-native-community/hooks`

with hook useDimensions, we get the correct dimensions of the screen,
whether in portrait or landscape mode.
This hook always returns the updated dimensions.
This was a limitations in the Dimensions API in react-native.
So this is the prefered way to get dimensions of screen
if you support multiple orientations.
console.log(useDimensions());
"window": Object {
"fontScale": 1,
"height": 844,
"scale": 3,
"width": 390,
},

We also have another hook for detecting the screen orientation.
useDeviceOrientation,
console.log(useDeviceOrientation());
Object {
"landscape": false,
"portrait": true,
}

We can destructure the landsape property from useDeviceOrientation
const { landscape } = useDeviceOrientation();
and have considional style
height: landscape ? "100%" : "30%",

The app we will be building won't be using landscape mode,
so we set the property in app.json back to portrait.

*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  StatusBar as StatusBarNative,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBarNative.currentHeight : 0,
  },
});
