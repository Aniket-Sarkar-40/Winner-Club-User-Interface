import { View, Text, Image } from "react-native";
import React from "react";

const carouselCard = ({ item }) => {
  return (
    <View style={{ padding: 15 }}>
      <Image
        source={require(`../../../assets/Images/c1.jpg`)}
        style={{ height: 50, width: "80%" }}
      />
    </View>
  );
};

export default carouselCard;
