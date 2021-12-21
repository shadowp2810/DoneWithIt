import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./Text";
import Icon from "./Icon";

//same API as PickerItem
function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={{ alignItems: "center" }}>
          <Icon
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={80}
          />
          <AppText style={[styles.text, { fontSize: 16 }]}>
            {item.label}
          </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
