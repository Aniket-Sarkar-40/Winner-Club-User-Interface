import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../../constant/Theme";

const Feature = ({ Icon, name, title, detail, noIcon }) => {
  return (
    <View style={styles.container}>
      {!noIcon ? (
        <View style={styles.iconContainer(name)}>
          <Icon name={name} style={{ fontSize: 40, color: COLORS.primary }} />
        </View>
      ) : null}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    // marginBottom: 10,
  },
  iconContainer: (title) => ({
    padding: 20,
    backgroundColor: "#d8f4f4",
    borderRadius: 100,

    paddingHorizontal: title === "dollar" ? 30 : 20,
  }),
  title: {
    paddingVertical: 10,
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  details: {
    color: COLORS.gray3,
    textAlign: "center",
  },
});

export default Feature;
