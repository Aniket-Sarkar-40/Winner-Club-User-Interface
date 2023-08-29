import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constant/Theme";
// import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import { useSelector } from "react-redux";

const CourseCard = ({
  title,
  url,
  price,
  description,
  courseLink,
  purchased,
  onPress,
}) => {
  // const navigation = useNavigation();
  // const {user} = useSelector((state) => state.user)
  const openWebsite = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Don't know how to open this URL:", url);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={purchased ? true : false}
      onPress={onPress}
    >
      <View style={styles.imageContainer(purchased)}>
        <Image style={styles.image} source={{ uri: url }} />
        <Text style={styles.price(purchased)}>₹{price}</Text>
      </View>
      <View style={styles.textContainer(purchased)}>
        <Text style={styles.courseName}>{title}</Text>
        {!purchased ? (
          <View>
            <Text style={{ fontWeight: "400" }}>{description}</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => openWebsite(courseLink)}
          >
            <Text style={styles.btn}>Watch Now</Text>
          </TouchableOpacity>
        )}

        {/* {purchased && (
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => openWebsite(courseLink)}
          >
            <Text style={styles.btn}>Watch Now</Text>
          </TouchableOpacity>
        )} */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    borderRadius: 20,
    // borderWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray2,
    marginVertical: 20,
    ...SHADOWS.medium,
  },
  imageContainer: (purchased) => ({
    width: "100%",
    height: purchased === true ? "60%" : "70%",
    // height: "60%",
    backgroundColor: COLORS.gray,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  }),
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  price: (purchased) => ({
    display: purchased === true ? "none" : "flex",
    position: "absolute",
    bottom: 10,
    right: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    color: COLORS.white,
    fontWeight: "500",
    fontSize: SIZES.medium,
    zIndex: 5,
  }),
  textContainer: (purchased) => ({
    backgroundColor: "#F8F2EE",
    height: purchased === true ? "40%" : "30%",
    // height: "40%",
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: SHADOWS.medium,

    borderBottomColor: COLORS.gray2,
  }),
  courseName: {
    fontSize: SIZES.xLarge,
    fontWeight: "500",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 20,
    fontWeight: "500",
  },
});

export default CourseCard;
