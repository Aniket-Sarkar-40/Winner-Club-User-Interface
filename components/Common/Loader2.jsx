import { View } from "react-native";
import React from "react";
import { COLORS } from "../../constant/Theme";
import LottieView from "lottie-react-native";

const Loader2 = () => {
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
        source={require("../../assets/loader2.json")}
        autoPlay
        loop
        style={{ width: "80%" }}
      />
    </View>
  );
};

export default Loader2;
