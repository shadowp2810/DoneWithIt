import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

import defaultStyles from "../config/defaultStyles";

import AppText from "./Text";
import AppHeading from "./Heading";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppHeading style={styles.title}>{title}</AppHeading>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    marginBottom: "5%",
    overflow: "hidden",
    width: Platform.isPad ? "40%" : null,
    height: Platform.isPad ? 390 : null,
    marginHorizontal: Platform.isPad ? 10 : null,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: "5%",
  },
  title: {
    fontSize: 22,
    marginBottom: 7,
  },
  subTitle: {
    fontSize: 22,
    color: defaultStyles.colors.secondary,
    fontWeight: "600",
  },
});

export default Card;
