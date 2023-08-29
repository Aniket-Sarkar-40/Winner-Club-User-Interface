import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constant/Theme";

const Card = ({
  title,
  url,
  basePrice,
  discPrice,
  todaysPrice,
  createdBy,
  onPress,
}) => {
  const dis2 = (100 - (todaysPrice / discPrice) * 100).toFixed(2);
  const dis1 = (100 - (discPrice / basePrice) * 100).toFixed(2);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: SIZES.large, fontWeight: "bold" }}>
          {title}
        </Text>
        <Text style={{ fontSize: SIZES.small, fontWeight: "300" }}>
          - Created By - {createdBy}
        </Text>
        <Text style={styles.todaysPrice}>Today's Price: ₹{todaysPrice}</Text>
        <Text style={{ fontSize: 18, color: COLORS.dark, fontWeight: "500" }}>
          <Text style={{ color: COLORS.gray2, fontSize: SIZES.medium }}>
            ₹{discPrice}
          </Text>{" "}
          {dis2}% off
        </Text>
        <Text style={{ color: COLORS.dark, fontWeight: "500" }}>
          <Text style={{ color: COLORS.gray2, fontSize: SIZES.medium }}>
            ₹{basePrice}
          </Text>{" "}
          {dis1}% off
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    height: 350,
    borderRadius: 30,
    // borderWidth: 2,
    borderBottomWidth: 2,
    marginVertical: 20,
    ...SHADOWS.medium,
  },
  imageContainer: {
    height: "55%",
    width: "100%",
    backgroundColor: COLORS.gray2,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    shadowOffset: SHADOWS.medium,
  },
  textContainer: {
    height: "45%",
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowOffset: SHADOWS.medium,
    borderBottomColor: COLORS.gray2,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  todaysPrice: {
    fontSize: SIZES.xLarge,
    fontWeight: "600",
    color: COLORS.red,
  },
});

export default Card;
