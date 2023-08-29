import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constant/Theme";

const NoCourse = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have no current courses.</Text>
      <Text style={styles.text}>You have to enroll first</Text>
      <Image
        source={require("../../assets/Images/noCourse.png")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 400,
        }}
      />
    </View>
  );
};

export default NoCourse;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: "600",
    color: COLORS.red,
    textAlign: "center",
    marginTop: 10,
  },
  text: {
    fontSize: SIZES.medium,
    fontWeight: "600",
    color: COLORS.dark,
    textAlign: "center",
    marginTop: 4,
  },
});
