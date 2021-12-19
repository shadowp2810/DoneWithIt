import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppHeading from "../components/Heading";
import AppText from "../components/Text";
import defaultStyles from "../config/defaultStyles";

import { ListItem } from "../components/lists";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppHeading style={styles.title}>{listing.title}</AppHeading>
        <AppText style={styles.price}>$ {listing.price}</AppText>
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
