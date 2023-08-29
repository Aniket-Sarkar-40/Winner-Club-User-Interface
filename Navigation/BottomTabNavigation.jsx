import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import {
  Contact,
  Courses,
  Home,
  Profile,
  MyCourses,
  UpdateProfile,
  UpdatePassword,
  UpdateProfilePic,
  AboutUs,
  SingleCard,
} from "../screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../constant/Theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrivacyPolicy from "../components/Drawer/PrivacyPolicy";
import FAQ from "../components/Drawer/FAQ";
import Founders from "../components/Drawer/Founders";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="singleCard" component={SingleCard} />
    {/* <Stack.Screen name="courses" component={Courses} /> */}
    <Stack.Screen name="knowUs" component={AboutUs} />
    <Stack.Screen name="privacy" component={PrivacyPolicy} />
    <Stack.Screen name="faq" component={FAQ} />
    <Stack.Screen name="founders" component={Founders} />
  </Stack.Navigator>
);

const CoursesStack = () => (
  <Stack.Navigator initialRouteName="courses">
    <Stack.Screen
      name="courses"
      component={Courses}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="singleCard"
      component={SingleCard}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator initialRouteName="profile">
    <Stack.Screen
      name="profile"
      component={Profile}
      options={{ headerShown: false }}
      // initialParams={{ user: user }}
    />
    <Stack.Screen
      name="mycourses"
      component={MyCourses}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="updateprofile"
      component={UpdateProfile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="updatepassword"
      component={UpdatePassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="updateprofilepic"
      component={UpdateProfilePic}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="aboutus"
      component={AboutUs}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BottomTabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={COLORS.primary}
        barStyle={{ backgroundColor: COLORS.lightPrimary }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="message"
          component={Contact}
          options={{
            tabBarLabel: "Message",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="message" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Courses"
          component={CoursesStack}
          options={{
            tabBarLabel: "Courses",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;
