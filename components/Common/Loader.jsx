import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../constant/Theme";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <LottieView
        source={require("../../assets/loader.json")}
        autoPlay
        loop
        style={{ width: "80%" }}
      />
    </View>
  );
};

export default Loader;
