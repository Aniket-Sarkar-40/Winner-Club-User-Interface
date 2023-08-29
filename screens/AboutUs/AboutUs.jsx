import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import LottieView from "lottie-react-native";
import BackBar from "../../components/Common/BackBar";
import { COLORS, SIZES } from "../../constant/Theme";
import Feature from "../../components/AboutUS/Feature";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Feather";
const AboutUs = () => {
  return (
    <>
      <BackBar title={"About us"} />
      <ScrollView>
        <View style={styles.scrollView}>
          <View style={styles.container}>
            <LottieView
              source={require("../../assets/aboutus.json")}
              autoPlay
              loop
              style={{ width: "90%" }}
            />
            <View style={styles.contentContainer}>
              <Text style={styles.boldText}>
                Here we uncover new and improved skills hidden in people by
                giving it a shape and structure.
              </Text>
              <Text style={styles.contentText}>
                WINNER'S CLUB is a digitally organized E-learning platform that
                focuses on the SKILL DEVELOPMENT as well as provide a income
                source of it's students.
              </Text>
              <View style={styles.featureContainer}>
                <Text style={{ ...styles.boldText, textAlign: "center" }}>
                  What is WINNER'S CLUB?
                </Text>
                <Text style={{ ...styles.contentText, textAlign: "center" }}>
                  WINNER'S CLUB is an e-learning platform that provides Skill
                  Development Courses related to career development,
                  Entrepreneurship,Skill Enhancement, and much more.
                </Text>
                <View style={styles.divider}></View>

                <Feature
                  Icon={Icon}
                  name={"dollar"}
                  title={"Affordable Prices"}
                  detail={
                    "People can afford WINNER CLUB'S pricing structure since we consider the demands and requirements of our viewers and follow a trend of low pricing to avoid unnecessary costs."
                  }
                />
                <Feature
                  Icon={Icon1}
                  name={"book-open"}
                  title={"Best Learnings"}
                  detail={
                    "Being inversely proportional to the pricing,The Knowledge that our courses provide is very high.The value that is provided through the courses is something that will help you in achieving more and more."
                  }
                />
                <Feature
                  Icon={Icon1}
                  name={"book-open"}
                  title={"Full Time Support"}
                  detail={
                    "Our support team is available 24x7 for each of our members. We are always here to resolve your problems in a go."
                  }
                />
                <LottieView
                  source={require("../../assets/laptop.json")}
                  autoPlay
                  loop
                  style={{ width: "100%" }}
                />

                <Text style={styles.title}>Why Choose us ?</Text>

                <Feature
                  title={"Virtue"}
                  detail={
                    "The diligent Virtue IDP offers to it’s audience, starting from services to support makes it one of a kind."
                  }
                  noIcon={true}
                />

                <Feature
                  title={"Mortality"}
                  detail={
                    "Morals are our insights on which we work to come out as an inspiring organization."
                  }
                  noIcon={true}
                />

                <Feature
                  title={"Honesty"}
                  detail={
                    "Honesty is one quality which we consistently have in our system, in order to always remain trustworthy in the eyes of our customers."
                  }
                  noIcon={true}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: COLORS.lightWhite,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
    marginBottom: 20,
  },
  contentText: {
    color: COLORS.gray3,
    marginVertical: 5,
  },
  featureContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  divider: {
    width: "20%",
    height: 5,
    backgroundColor: COLORS.primary,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
});

export default AboutUs;
