/*
Now we allow user to tap on image.

For Text component we have onPress prop,
for Image there is no such prop.

The Touchable comonents in react native are

- TouchableHighlight
- TouchableOpacity
- TouchableWithoutFeedback

The Touchable component we use
depends on the kind of feedback we want to give users.

We move image component inside TouchableWithoutFeedback.
TouchableWithoutFeedback has events onPress, onLongPress

      <TouchableWithoutFeedback onPress={() => console.log("Image Tapped")}>
        <Image
          blurRadius={10}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>

TouchableOpacity , the opacity gets reduced for fraction of second when touching.
TouchableHighlight , the background gets darkend for fraction of second when touching.

There are touchables specific to android.
Its called TouchableNativeFeedback

*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
        <Image
          blurRadius={10}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
