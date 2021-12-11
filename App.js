/*
Let's talk about dimensions of components on screen.

When we specify width: 150, height: 70 ,
these numbers are DIPs or Density-Independent Pixels.
Physical Pixels = DIPs \* Scale Factor

iPhone 4 can display 320*480 points.
These points are abstract units and not actual pixels.
The scale factor of iPhone 4 is 2x.
That means every point contains 2 pixels.
So screen resolution of iPhone 4 is 640*960 pixels.
If width of our view is 150 (DIPs),
it's actual width on iPhone is 150\*2 which is 300 pixels.
Rougly arround half the screen width.

In contract iPhone 11 Pro Max can display 414*896 points.
And with scale factor of 3x,
the resolution is 1242*2688.
The width of view on this iPhone is 150\*3 which is 450 pixels.
So less than half screen width.

What matters is by representing our numbers in DIPs,
they look almost identical across different devices.

If we want to make sure width is exaclty half of screen we replace 150 with '50%'

In some cases we want to fine tune size of component by size of screen.
In those cases we use the Dimensions API.

screen returns size of entire screen,
window returns size of visible application window.
On iOS diminsions are equal, only different on android.
window size is a bit smaller than screen size.

console.log(Dimensions.get("screen"));

iPhone 13
Object {
"fontScale": 1,
"height": 844,
"scale": 3,
"width": 390,
}
OnePlus 6
Object {
"fontScale": 1,
"height": 810.6666666666666,
"scale": 2.8125,
"width": 384,
}

The problem with this API is it doesn't respond to dimension changes.
So if user rotates device, the numbers don't get updated.
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

export default function App() {
  console.log(Dimensions.get("window"));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
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
