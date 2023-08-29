import { View, Text, Image } from "react-native";
import React from "react";

const BannerSlider = ({ data }) => {
  return (
    <View>
      <Image
        source={data.image}
        style={{ width: 350, height: 150, borderRadius: 10 }}
      />
    </View>
  );
};

export default BannerSlider;
