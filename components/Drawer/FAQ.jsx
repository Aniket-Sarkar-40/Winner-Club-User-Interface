import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import BackBar from "../Common/BackBar";
import LottieView from "lottie-react-native";
import { COLORS, SIZES } from "../../constant/Theme";

const FAQ = () => {
  return (
    <>
      <BackBar title={"FAQ"} />
      <ScrollView>
        <View style={styles.container}>
          <LottieView
            source={require("../../assets/faqs.json")}
            autoPlay={true}
            loop={true}
            resizeMode="contain"
            style={{
              width: "80%",
            }}
          />
          <Text style={styles.title}>FAQS</Text>
          <Text style={styles.subtitle}>(Frequently Asked Questions)</Text>

          <View style={styles.faq}>
            <Text style={styles.question}>What is WINNER'S CLUB?</Text>
            <Text style={styles.answer}>
              WINNER'S CLUB is an e-learning platform that provides Skill
              Development Courses related to career development,
              Entrepreneurship,Skill Enhancement, and much more.
            </Text>
            <Text style={styles.question}>
              How can I get benifit from WINNER'S CLUB?
            </Text>
            <Text style={styles.answer}>
              You can easily take benefit from WINNER'S CLUB by learning from
              our skill development courses AND training by users friendly
              trainers with low price.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.primary,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 10,
  },
  faq: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  question: {
    fontSize: SIZES.medium,
    color: COLORS.gray1,
    fontWeight: "600",
    marginBottom: 5,
  },
  answer: {
    color: COLORS.gray3,
    marginHorizontal: 3,
    marginBottom: 10,
  },
});
