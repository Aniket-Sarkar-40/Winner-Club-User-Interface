import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BackBar from "../../components/Common/BackBar";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleCourse } from "../../redux/actions/course";
import Loader from "../../components/Common/Loader";
import { COLORS, SHADOWS, SIZES } from "../../constant/Theme";

const SingleCard = ({ navigation, route }) => {
  const { course } = route.params;

  return (
    <>
      <BackBar title={route.params.title} />

      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: course.poster.url }}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.createdBy}>
              Created By - {course.createdBy}
            </Text>
            <Text style={{ textAlign: "center", fontSize: SIZES.medium }}>
              No of students enrolled - {course.students.length}
            </Text>
            <Text style={styles.description}>{course.description}</Text>
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.todayPrice}>
                Todays Price : ₹{course.price.todaysPrice}
              </Text>
              <Text style={styles.priceContainer}>
                ₹{course.price.discountedPrice}{" "}
                <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
                  {(
                    100 -
                    (course.price.todaysPrice / course.price.discountedPrice) *
                      100
                  ).toFixed(2)}
                  % off
                </Text>
              </Text>
              <Text
                style={{
                  color: COLORS.gray3,
                  textAlign: "center",
                }}
              >
                ₹{course.price.basePrice}{" "}
                <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>
                  {(
                    100 -
                    (course.price.discountedPrice / course.price.basePrice) *
                      100
                  ).toFixed(2)}
                  % off
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buyNow}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "red",
    paddingVertical: 35,
    paddingHorizontal: 25,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  textContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buyNow: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: SIZES.large,
  },
  priceContainer: {
    color: COLORS.gray3,
    fontSize: SIZES.medium,
    textAlign: "center",
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: "600",
    paddingVertical: 5,
    textAlign: "center",
  },
  createdBy: {
    // fontSize: SIZES.medium,
    color: COLORS.gray3,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: SIZES.medium,
  },
  todayPrice: {
    fontSize: SIZES.large,
    color: COLORS.red,
    fontWeight: "600",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    marginVertical: 10,
  },
});

export default SingleCard;
