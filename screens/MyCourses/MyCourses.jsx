import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { COLORS, SIZES } from "../../constant/Theme";
import LottieView from "lottie-react-native";
import CourseCard from "../../components/Common/cards/CourseCard";
import { useSelector } from "react-redux";
import Loader from "../../components/Common/Loader";
import NoCourse from "../../components/MyCourse/NoCourse";
import BackBar from "../../components/Common/BackBar";

const MyCourses = () => {
  const { user, loading } = useSelector((state) => state.user);

  return loading ? (
    <Loader />
  ) : (
    <>
      <BackBar title={"My Course"} />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightWhite,
        }}
      >
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
              <View>
                {/* Left */}
                <Text style={{ fontSize: SIZES.large }}>Hey, </Text>
                <Text style={styles.name}>{user.name}</Text>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <LottieView
                  source={require("../../assets/courses.json")}
                  autoPlay
                  loop
                  style={{ width: "90%", marginVertical: 10 }}
                />
              </View>

              <Text style={styles.MyCourses}>My Courses</Text>

              <View style={{ paddingHorizontal: 10 }}>
                {user.playlist.length === 0 ? (
                  <NoCourse />
                ) : (
                  user.playlist.map((elem, index) => (
                    <CourseCard
                      title={elem.name}
                      url={elem.poster}
                      courseLink={elem.courseLink}
                      purchased={true}
                      key={index}
                    />
                  ))
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: SIZES.xxLarge,
    fontWeight: "900",
    paddingVertical: 8,
    color: COLORS.primary,
  },
  MyCourses: {
    fontSize: SIZES.xLarge,
    fontWeight: "700",
    marginTop: 10,
  },
});

export default MyCourses;
