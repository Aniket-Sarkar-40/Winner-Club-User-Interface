import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "./screens";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import Loader2 from "./components/Common/Loader2";
import BottomTabNavigation from "./Navigation/BottomTabNavigation";
import Welcome from "./screens/Welcome/Welcome";

const Stack = createNativeStackNavigator();

const Main = () => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 4000);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return loader ? (
    <Welcome />
  ) : loading ? (
    <Loader2 />
  ) : (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName={isAuthenticated ? "bottomTab" : "login"}
        >
          <Stack.Screen
            name="bottomTab"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default Main;
