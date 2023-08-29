import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constant/Theme";
import Icon1 from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Chip = ({ Icon, iconName, text, route }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.options}
      onPress={() => navigation.navigate(route)}
    >
      <View style={styles.content}>
        <Icon
          name={`${iconName}`}
          size={30}
          style={{ color: COLORS.gray3, marginRight: 20 }}
        />
        <Text style={styles.opt}>{text}</Text>
      </View>
      <Icon1 name="chevron-right" size={30} style={{ color: COLORS.gray3 }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  opt: {
    fontSize: 18,
    color: COLORS.gray3,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Chip;
