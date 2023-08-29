import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { COLORS, SIZES } from "../../constant/Theme";

const Option = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Icon name="options-vertical" />
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 65,
    right: 20,
    alignSelf: "flex-start",
    // backgroundColor: "red",
    zIndex: 5,
  },
  btn: {
    padding: SIZES.medium,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.gray2,
  },
});
