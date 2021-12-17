/*
Currently adding too many images has it leaving the frame,
so we add a scrollview, which is vertical by default,
so we set it to horizontal={true} or just horizontal.

To call a method on component ScrollView, we use a refhook,
using refhook we get a reference to instance of that component.
  const scrollView = useRef();
In ScrollView we set prop
        ref={scrollView}
and 
        onContentSizeChange={() => scrollView.current.scrollToEnd()}

ScrollView take up whole screen,
so we wrap it in a view. 
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
