/*
We can display local(bundled into app) or network images

For local image
<Image source={require("./assets/icon.png")} />
The require function returns a number that is a reference to our image.

console.log(require("./assets/icon.png"));
gives 4

https://picsum.photos/
is a random photo generator.
https://picsum.photos/200/300
generates random image of width 200 and height 300.

For network images we have to specify dimensions to be visible.
<Image
source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
/>

Image component has many props.
https://reactnative.dev/docs/image

blurRadius , the blur radius of the blur filter added to the image.
blurRadius={10}

loadingIndicatorSource​ , is similar to source prop.
We can give local image using require function,
or pass a network image using uri of image.
Image we pass will be displayed as actual image is downloaded.

fadeDuration , only for Android​, displays image with fade effect.

resizeMode , is used if diminsions of image is different from one we specify.
It has various modes 'cover', 'contain', 'stretch', 'repeat', 'center'.
Same as web applications.

Some useful prop methods are
onLoad​ , Invoked when load completes successfully.
(ImageLoadEvent) => void

onLoad​End , Invoked when load either succeeds or fails.
() => void

onLoad​Start , Invoked on load start.
() => void
Example: onLoadStart={() => this.setState({loading: true})}
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <Image
        blurRadius={10}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
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
    justifyContent: "center",
    alignItems: "center",
  },
});
