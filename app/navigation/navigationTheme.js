import React from "react";
import DefaultTheme from "@react-navigation/native";

import defaultStyles from "../config/defaultStyles";

export default {
  //We spread to get all its properties.
  ...DefaultTheme,
  //We overwrite colors, which is a complex object.
  colors: {
    //We copy all the properties in DefaultTheme, then overide some
    ...DefaultTheme,
    primary: defaultStyles.colors.primary,
    background: defaultStyles.colors.white,
  },
};
