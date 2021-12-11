/*
Another useful API to know about is the StyleSheet API.
With this we define styles.
What we have here is not css but their names are defined by css.
They are just regular javascript properties.

So when we build the app,
react native maps these platform agnostic components to thier native equivalent.
And then it applies these properties on them.

The object we pass on view or safeareaview style={styles.container} is just a ordinary js object.
We could instead of refrencing object we can also pass an inline object here.
style={{ backgroundColor: "orange" }}

We can also define it somewhere else.
const containerStyle = { backgroundColor: "orange" };
and reference it in component
style={containerStyle}

Previously we were using styles.container.
style={styles.container}
where styles is the object he are defining below in under App function component.
So when we call StyleSheet.create({ in const styles = StyleSheet.create({ ,
we pass an object which is same object we get as a result.
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
},
});
So our styles object has a property called container, which is an object itself.
This method validates the properties we user here.
So it ensures we don't accidentely mispell a property.
This validation doesn't happen if we use a plain js object directly.
Passing an inline object like style={{ backgroColor: "orange" }}
which has errors presents us with no errors.
So this is one benefit of using StyleSheet.create.

The second benefit is the react native team
has been working on some optimizations behind the scene.
So it is recommended practice to use StyleSheet API to define styles.

In style={styles.container} we can pass an array of objects.
style={[styles.container, containerStyle]}
The object on right overwrites object on left.
So results are more predictable than css.

You can extract the styles to another file,
but its more conventional to define it below.
Its a personal preference, but might be easier if right below defined component.
*/

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Alert, SafeAreaView, Button } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello React Native!</Text>
      <Button
        color={"teal"}
        title="Click Me"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
