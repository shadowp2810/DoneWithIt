import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Platform } from "react-native";

import Card from "../components/Card";
import defaultStyles from "../config/defaultStyles";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import AppButton from "../components/Button";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Coulden't retrieve listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      {!Platform.isPad && (
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$ " + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
          ListFooterComponent={<View style={{ height: 70 }} />}
        />
      )}
      {Platform.isPad && (
        <FlatList
          numColumns={2}
          columnWrapperStyle={{
            alignSelf: "center",
          }}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$ " + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
          ListFooterComponent={<View style={{ height: 70 }} />}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: defaultStyles.colors.light,
  },
});

export default ListingsScreen;
