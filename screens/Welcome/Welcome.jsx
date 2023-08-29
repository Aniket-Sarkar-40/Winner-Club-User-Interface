import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { COLORS, SIZES } from "../../constant/Theme";
import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [blinkAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    startBlinkAnimation();
  }, []);

  const startBlinkAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }),
        Animated.timing(blinkAnimation, {
          toValue: 0,
          duration: 600,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const animatedStyle = {
    opacity: blinkAnimation,
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Images/bg.png")}
        resizeMode="cover"
        style={styles.imageContainer}
      >
        <Animated.Image
          source={require("../../assets/Images/fav.png")}
          resizeMode="contain"
          style={[styles.img, animatedStyle]}
        />
        <Animated.Text style={[styles.text, animatedStyle]}>
          Winner's Club
        </Animated.Text>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "hsla(183,100%,50%,1)",
  },
  img: {
    width: 80,
    height: 80,
  },
  text: {
    fontWeight: "bold",
    color: COLORS.dark,
    fontSize: SIZES.xLarge,
  },
  imageContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    alignItems: "center",
  },
});
