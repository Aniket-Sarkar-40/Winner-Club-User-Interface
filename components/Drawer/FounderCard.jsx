import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constant/Theme";

const FounderCard = ({ name, role, about, url }) => {
  return (
    <View style={styles.container}>
      <Image source={url} resizeMode="cover" style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{role}</Text>
        <Text style={styles.text}>{about}</Text>
      </View>
    </View>
  );
};

export default FounderCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    marginVertical: 10,
    elevation: 10,
    borderRadius: 20,
  },
  img: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    padding: 20,
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightPrimary,
    height: "30%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
  },
  text: {
    color: COLORS.gray3,
    fontSize: SIZES.medium,
  },
});
