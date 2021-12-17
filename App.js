/*
When launching image library in ImageInput
      const result = await ImagePicker.launchImageLibraryAsync();
we want to pass an configuration object.
We use         
mediaTypes: ImagePicker.MediaTypeOptions.Images,
so only images can be selected
quality: 0.5,
which is between 0 and 1.
When we upload to server 
we don't want to deal with a large upload.
In
      if (!result.cancelled) setImageUri(result.uri);
we are trying to update our local state variable,
but in this component we already have a prop called imageUri.
It doesn't make sence to have a prop 
and state variable with same purpose.
So the component that uses our image input should be responsible
for maintaing state. So we add a second prop onChangeImage.
Which is the event this component is going to raise.
So when the user selects an image, we are going to call onChangeImage,
and notify the consumer of this component that the image is changed,
and we would pass the uri to that image.
In <ImageInput below we handle the onChangeImage event,
set it to a function which takes the uri of the image,
and this is where we update the state, setImageUri(uri),
giving it the uri.

Back to our component,
if we don't have an image, we show image library.
Otherwise we show an alert and ask if we want to delete an image.
Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
Where the array of button are Yes and No.

We move the useEffect and its async function to ImageInput.
useEffect with empty array is only called once.

*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}

// <View
//   style={{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "3%",
//   }}
// >
// </View>
