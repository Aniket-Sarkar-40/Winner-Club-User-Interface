import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../constant/Theme";

const Footer = () => {
  const [activeState, setActiveState] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navBox}
        onPress={() => {
          navigation.navigate("home");
          setActiveState(0);
        }}
      >
        <Icon
          name="home"
          size={25}
          style={{
            color:
              activeState === 0 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color:
              activeState === 0 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBox}
        onPress={() => {
          navigation.navigate("contact");
          setActiveState(1);
        }}
      >
        <Icon1
          name="message-text-outline"
          size={25}
          style={{
            color:
              activeState === 1 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color:
              activeState === 1 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        >
          Message
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBox}
        onPress={() => {
          navigation.navigate("courses");
          setActiveState(2);
        }}
      >
        <Icon
          name="book"
          size={25}
          style={{
            color:
              activeState === 2 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color:
              activeState === 2 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        >
          Course
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBox}
        onPress={() => {
          navigation.navigate("profile");
          setActiveState(3);
        }}
      >
        <Icon
          name="user"
          size={25}
          style={{
            color:
              activeState === 3 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color:
              activeState === 3 ? COLORS.primary : "rgba(108, 106, 106, 1)",
          }}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: 60,
  },
  navBox: {
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    width: 60,
  },
});

export default Footer;
