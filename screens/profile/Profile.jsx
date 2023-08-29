import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../constant/Theme";
import Separator from "../../components/Common/Separator";
import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Chip from "../../components/Profile/Chip";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../../redux/actions/user";
import { clearError, clearMessage } from "../../redux/reducers/userReducer";
import Toast from "react-native-toast-message";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.user);
  const { message: profileMessage, error: profileError } = useSelector(
    (state) => state.profile
  );

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch(clearMessage());
    }
    if (profileMessage) {
      Toast.show({
        type: "success",
        text1: profileMessage,
      });
      dispatch(clearMessage());
    }
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch(clearError());
    }
    if (profileError) {
      Toast.show({
        type: "error",
        text1: profileError,
      });
      dispatch(clearError());
    }
    // dispatch(loadUser());
  }, [dispatch, error, message, profileMessage, profileError]);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.headingContainer2}>
          <Text style={styles.heading}>My Profile</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/Images/coin.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ fontSize: SIZES.large, marginLeft: 5 }}>
              {user.earning}
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: user.avatar.url }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.subscription}>{user.subscription.status}</Text>
          </View>
        </View>
      </View>

      <Separator />

      <View style={styles.optionsContainer}>
        <Chip
          Icon={Icon}
          iconName={"user"}
          text={"Update Profile"}
          route={"updateprofile"}
        />
        <Chip
          Icon={Icon2}
          iconName={"account-edit-outline"}
          text={"Update Profile Picture"}
          route={"updateprofilepic"}
        />
        <Chip
          Icon={Icon}
          iconName={"lock"}
          text={"Update Password"}
          route={"updatepassword"}
        />
        <Chip
          Icon={Icon1}
          iconName={"book"}
          text={"My Courses"}
          route={"mycourses"}
        />
        <Chip
          Icon={Icon1}
          iconName={"exclamationcircleo"}
          text={"About Us"}
          route={"aboutus"}
        />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={logoutHandler}
        >
          <Icon2
            name={`logout`}
            size={30}
            style={{ color: "red", marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 18,
              color: COLORS.gray3,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // paddingHorizontal: 10,
    color: COLORS.lightWhite,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "500",
    paddingVertical: 5,
  },
  headingContainer: {
    paddingVertical: 20,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headingContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
    marginRight: 20,
  },
  optionsContainer: {
    padding: 25,
  },
  name: {
    fontSize: SIZES.large,
    color: COLORS.gray3,
    paddingBottom: 2,
    paddingTop: 3,
  },
  email: {
    color: COLORS.gray3,
    paddingBottom: 2,
    paddingTop: 1,
  },
  subscription: {
    color: "red",
    fontSize: SIZES.medium,
  },
});

export default Profile;
