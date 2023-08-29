import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constant/Theme";

const DelText = ({ t }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{t}</Text>
      <View style={styles.cut}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.gray2,
  },
  cut: {
    backgroundColor: COLORS.gray2,
    position: "relative",
    bottom: 9,
    left: 0,
    width: "100%",
    height: 1,
  },
  box: {
    position: "relative",
    top: 5,
    left: 0,
  },
});

export default DelText;
