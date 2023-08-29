import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";

import LottieView from "lottie-react-native";
import { COLORS, SIZES } from "../../constant/Theme";
import { Button, Dialog, HelperText } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/user";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { clearError, clearMessage } from "../../redux/reducers/userReducer";
import { forgetPassword } from "../../redux/actions/profile";
import Loader from "../../components/Common/Loader";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [fogetEmail, setFogetEmail] = useState("");
  const [see1, setSee1] = useState(true);

  const hasErrors = () => {
    return !email.includes("@") && email.length !== 0;
  };
  const hasErrors2 = () => {
    return password.length < 6 && password.length !== 0;
  };

  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.user);
  const {
    message: profileMessage,
    error: profileError,
    loading,
  } = useSelector((state) => state.profile);

  const handleCancelBtn = () => {
    setOpenDialog(false);
  };

  const handleSubmitButton = () => {
    dispatch(forgetPassword(fogetEmail));
    setOpenDialog(false);
  };

  const loginHandler = () => {
    dispatch(login(email, password));
  };

  const forgotPasswordHandler = () => {
    setOpenDialog(true);
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
  }, [dispatch, error, message, profileMessage, profileError]);

  return loading ? (
    <Loader />
  ) : (
    <View style={styles.mainContainer}>
      <ScrollView style={{ width: "100%" }}>
        <SafeAreaView style={styles.firstBox}>
          <View style={styles.container}>
            <LottieView
              source={require("../../assets/login.json")}
              autoPlay
              loop
              style={{ width: "80%" }}
            />

            <Text style={styles.login}>Log in</Text>

            <View style={{ width: "70%" }}>
              <HelperText type="error" visible={hasErrors()}>
                Enter a valid email.
              </HelperText>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <HelperText type="error" visible={hasErrors2()}>
                Minimum 6 characters needed
              </HelperText>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  secureTextEntry={see1}
                  style={styles.input}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                />

                <Icon
                  name={see1 ? "eye" : "eye-off"}
                  size={25}
                  onPress={() => setSee1(!see1)}
                  style={{ position: "absolute", right: 10, top: 13 }}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{
                width: "70%",
                paddingBottom: 15,
              }}
              onPress={forgotPasswordHandler}
            >
              <Text style={styles.forgetPassword}>Forget password ?</Text>
            </TouchableOpacity>

            <Button
              disabled={!email || !password}
              style={styles.btn}
              onPress={loginHandler}
            >
              <Text style={{ color: COLORS.white }}>Log in</Text>
            </Button>

            <Text style={{ marginTop: 20 }}>Or</Text>

            <TouchableOpacity onPress={() => navigation.navigate("signup")}>
              <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>

            <Dialog visible={openDialog} onDismiss={handleCancelBtn}>
              <Dialog.Title>Forgot Password</Dialog.Title>
              <Dialog.Content>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={setFogetEmail}
                  value={fogetEmail}
                />

                <View style={styles.dialog}>
                  <TouchableOpacity style={{}} onPress={handleCancelBtn}>
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                  <Button textColor="green" onPress={handleSubmitButton}>
                    Submit
                  </Button>
                </View>
              </Dialog.Content>
            </Dialog>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.lightWhite,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "red",
    height: Dimensions.get("window").height,
  },
  firstBox: {
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    // marginVertical: 15,
    fontSize: 15,
    width: "100%",
  },
  btn: {
    backgroundColor: "#1abebe",
    padding: 5,
    width: "70%",
  },
  login: {
    color: COLORS.dark,
    fontSize: SIZES.xxLarge,
    fontWeight: "600",
    marginBottom: 5,
  },
  forgetPassword: {
    textAlign: "right",
    fontSize: SIZES.small,
    color: COLORS.dark,
    marginTop: 5,
  },
  signUp: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    margin: 20,
  },
  dialog: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
