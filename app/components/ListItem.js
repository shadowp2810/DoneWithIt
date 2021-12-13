import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ image, title, subTitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: "2%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subTitle: {
    marginTop: "1%",
    fontWeight: "300",
    color: colors.medium,
  },
});

export default ListItem;
