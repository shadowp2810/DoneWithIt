import React from "react";
import { View, StyleSheet, Image } from "react-native";

import defaultStyles from "../config/styles";

import AppText from "./AppText";
import AppHeading from "./AppHeading";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppHeading style={styles.title}>{title}</AppHeading>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    marginBottom: "5%",
    overflow: "hidden",
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
