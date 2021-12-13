import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppHeading style={styles.title}>Red jacket for sale</AppHeading>
        <AppText style={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: "4%",
  },
  title: {},
  price: {
    color: colors.secondary,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
