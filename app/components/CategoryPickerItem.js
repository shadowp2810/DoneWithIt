import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

//same API as PickerItem
function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    flex: 1,
    width: "33%",
  },
  text: {
    marginTop: 5,
    width: "125%",
    textAlign: "center",
  },
});

export default CategoryPickerItem;
