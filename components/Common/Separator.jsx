import { View, Text, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../constant/Theme";

const Separator = () => {
  const { width } = Dimensions.get("window");
  return (
    <View
      style={{ width: width, height: 1, backgroundColor: COLORS.gray2 }}
    ></View>
  );
};

export default Separator;
