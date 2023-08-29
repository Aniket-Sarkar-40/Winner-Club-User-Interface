import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constant/Theme";
import LottieView from "lottie-react-native";
import Card from "../../components/Courses/Card";
import axios from "axios";
import { server } from "../../redux/store";
import Loader from "../../components/Common/Loader";

const Courses = ({ navigation }) => {
  const [courseData, setCourseData] = useState([]);
  const [courseNo, setCourseNo] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [refresh, setRefresh] = useState(false);

  const pullToRefresh = () => {
    setRefresh(true);
    fetchCourses();
    setTimeout(() => {
      setRefresh(false);
    }, 4000);
  };

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get(`${server}/courses?page=${page}`);
      setCourseData(data.courses);
      setCourseNo(data.courseCount);
      const intPageCount = Math.ceil(courseNo / 10);
      setPageCount(intPageCount);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [pageCount, page, courseNo, refresh]);

  return loading ? (
    <Loader />
  ) : (
    <View style={styles.mainContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => pullToRefresh()}
          />
        }
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
            <Text style={styles.ourCourses}>OUR COURSES</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <LottieView
                source={require("../../assets/allCoures.json")}
                autoPlay
                loop
                style={{ width: "90%", marginVertical: 10 }}
              />
            </View>

            <View style={{ paddingHorizontal: 18 }}>
              {courseData.map((curr, index) => (
                <Card
                  title={curr.title}
                  url={curr.poster.url}
                  basePrice={curr.price.basePrice}
                  discPrice={curr.price.discountedPrice}
                  todaysPrice={curr.price.todaysPrice}
                  createdBy={curr.createdBy}
                  key={index}
                  onPress={() =>
                    navigation.navigate("singleCard", {
                      title: curr.title,
                      key: curr._id,
                      course: curr,
                    })
                  }
                />
              ))}
            </View>

            <View style={styles.paginationContainer}>
              <TouchableOpacity
                style={styles.pagination}
                onPress={() => {
                  if (page > 1) {
                    setPage(page - 1);
                    setLoading(true);
                  }
                }}
              >
                <Text style={styles.prev}>Prev</Text>
              </TouchableOpacity>
              <Text style={styles.page}>
                {page} of {pageCount}
              </Text>
              <TouchableOpacity
                style={styles.nextContainer}
                onPress={() => {
                  if (page < pageCount) {
                    setPage(page + 1);
                    setLoading(true);
                  }
                }}
              >
                <Text style={styles.next}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.lightWhite,
  },
  ourCourses: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: SIZES.xxLarge,
    color: COLORS.dark,
  },
  pagination: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: COLORS.dark,

    borderRadius: 10,
  },
  prev: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: "400",
  },
  page: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: COLORS.dark,
    color: COLORS.white,
    borderRadius: 10,
    fontSize: SIZES.medium,
    fontWeight: "400",
  },
  paginationContainer: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    columnGap: 10,
    marginVertical: 20,
  },
  nextContainer: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
  },
  next: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: "400",
  },
});
