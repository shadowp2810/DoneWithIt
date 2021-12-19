const { DefaultTheme } = require("@react-navigation/native");
const { default: defaultStyles } = require("../config/defaultStyles");

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
