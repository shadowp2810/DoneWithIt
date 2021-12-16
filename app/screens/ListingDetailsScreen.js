import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

import { ListItem } from "../components/lists";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppHeading style={styles.title}>Red jacket for sale</AppHeading>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="9 listings"
          />
        </View>
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
    color: defaultStyles.colors.secondary,
    fontSize: 23,
    fontWeight: "600",
  },
  userContainer: {
    marginVertical: "7%",
  },
});

export default ListingDetailsScreen;
