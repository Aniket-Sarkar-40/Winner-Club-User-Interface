import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { COLORS, SIZES } from "../../constant/Theme";
import CourseCard from "../../components/Common/cards/CourseCard";
import Loader from "../../components/Common/Loader";
import axios from "axios";
import { server } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { clearMessage } from "../../redux/reducers/userReducer";
import MyDrawer from "../../components/Home/MyDrawer";
import Carousel from "react-native-snap-carousel";
import BannerSlider from "../../components/Home/BannerSlider";

const carouselImages = [
  {
    id: 1,
    image: require("../../assets/Images/c1.jpg"),
  },
  {
    id: 2,
    image: require("../../assets/Images/c2.jpg"),
  },
  {
    id: 3,
    image: require("../../assets/Images/c3.jpg"),
  },
  {
    id: 4,
    image: require("../../assets/Images/c4.jpg"),
  },
  {
    id: 5,
    image: require("../../assets/Images/c5.jpg"),
  },
];

const { width } = Dimensions.get("window");

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { user, message, errorMessage } = useSelector((state) => state.user);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(`${server}/courses`);
        setCourseData(data.courses);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch(clearMessage());
    }
    if (errorMessage) {
      Toast.show({
        type: "error",
        text1: errorMessage,
      });
      dispatch(clearError());
    }
  }, [dispatch, errorMessage, message]);

  let slicedCourseData = courseData.slice(0, 4);

  return loading ? (
    <Loader />
  ) : (
    <>
      <View style={styles.mainContainer}>
        <ScrollView>
          <SafeAreaView style={{ flex: 1 }}>
            {openDrawer ? <MyDrawer /> : null}
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <View>
                  {/* Left */}
                  <Text style={{ fontSize: SIZES.large }}>Hello, </Text>
                  <Text
                    style={{
                      fontSize: SIZES.xxLarge,
                      fontWeight: "900",
                      paddingVertical: 8,
                    }}
                  >
                    {user.name}!
                  </Text>
                </View>
                <View>
                  {/* right */}
                  <TouchableOpacity
                    style={{
                      padding: SIZES.medium,
                      borderWidth: 2,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: COLORS.gray2,
                    }}
                    onPress={() => setOpenDrawer(!openDrawer)}
                  >
                    <Icon name="options-vertical" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* search can be implemented here */}

              <Carousel
                ref={(c) => {
                  this._carousel = c;
                }}
                data={carouselImages}
                renderItem={renderBanner}
                sliderWidth={width - 20}
                itemWidth={350}
                loop={true}
                autoplay
              />

              {/* cardContainer */}

              <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
                <View style={styles.container}>
                  <Text style={styles.trending}>Trending Courses</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Courses")}
                  >
                    <Text style={{ color: COLORS.primary, fontWeight: "500" }}>
                      See all
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  {slicedCourseData.map((curr, index) => (
                    <CourseCard
                      key={index}
                      title={curr.title}
                      url={curr.poster.url}
                      price={curr.price.todaysPrice}
                      description={curr.description}
                      courseLink={curr.courseLink}
                      purchased={false}
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
              </View>
            </>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignItems: "center",
  },
  trending: {
    fontSize: SIZES.large,
    fontWeight: "600",
  },
});
