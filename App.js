/*
Now we build a component for selecting multiple images.
We build ImageInputList.
We want to lay it horizontally so flexDirection: row.
The props it takes should be a collection of imageUris.
In the view each array value is mapped to an ImageInput.
Currently we don't have functionality to replace an image,
so if we have an image inside an image input and change event is raised,
that means user has deleted that image,
so here inside view where values are mapped, we should handle deletion.
Just like the ImageInput component we don't want to maintain local state here,
we want to have the state somewhere else, inside our form.
So we add two more props, onRemoveImage, onAddImage,
so adding or removing an image, rasises three events.
Since we are using the map method we set the key prop to uri of the image.
After this ImageInput, we are always going to have an ImageInput to add new images.
We rename state imageUri to imageUris as we are dealing with multiple.

Whenever you see pattern
        onAddImage={uri=>handleAdd(uri)}
where you have a parameter, that you call and function and pass a parameter,
you can simplify code to simply use name of function.
        onAddImage={handleAdd}

Using spread operator we take copy of aray and add uri
    setImageUris([...imageUris, uri])

To get all uris exept the one we get
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));

    To add padding between the items in list,
    we wrap it in a view, and move the key prop to it because it is the container.
*/

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
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
