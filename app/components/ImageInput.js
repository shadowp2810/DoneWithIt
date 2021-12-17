import React from "react";
import { View, Image, StyleSheet } from "react-native";
import defaultStyles from "../config/defaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons
          color={defaultStyles.colors.medium}
          name="camera"
          size={40}
        />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
