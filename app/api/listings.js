import client from "./client";

/*
here we implement our logic and getting listings from server.
This logic should be encapsulated in our api layer.
hidden from our components.
*/
const endpoint = "/listings";
const getListings = () => client.get(endpoint);

export default {
  getListings,
};
