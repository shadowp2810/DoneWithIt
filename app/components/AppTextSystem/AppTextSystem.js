import React from "react";
import { Text } from "react-native";

import styles from "./styles";

function AppTextSystem({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default AppTextSystem;
