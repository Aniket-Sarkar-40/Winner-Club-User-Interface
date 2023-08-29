import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

import LottieView from "lottie-react-native";
import { COLORS, SIZES } from "../../constant/Theme";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../redux/actions/other";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { clearError, clearMessage } from "../../redux/reducers/otherReducer";

const Contact = () => {
  const dispatch = useDispatch();
  const { message: notification, error } = useSelector((state) => state.other);
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    // console.log(name, email, message);
    dispatch(contactUs(name, email, message));
    setEmail("");
    setName("");
    setMessage("");
  };

  useEffect(() => {
    if (notification) {
      Toast.show({
        type: "success",
        text1: notification,
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
  }, [dispatch, error, notification]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{ width: "100%" }}>
        <SafeAreaView style={styles.firstBox}>
          <View style={styles.container}>
            <LottieView
              source={require("../../assets/contact.json")}
              autoPlay
              loop
              style={{ width: "80%" }}
            />

            <Text style={styles.contactUs}>Contact Us</Text>

            <View style={{ width: "70%" }}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />

              <TextInput
                style={styles.input}
                placeholder="Your Message"
                value={message}
                onChangeText={setMessage}
              />
            </View>

            <Button
              disabled={!email || !name || !message}
              style={styles.btn}
              onPress={submitHandler}
            >
              <Text style={{ color: COLORS.white }}>Submit</Text>
            </Button>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.lightWhite,
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
    marginVertical: 15,
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#1abebe",
    padding: 5,
    width: "70%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  contactUs: {
    color: COLORS.dark,
    fontSize: SIZES.xxLarge,
    fontWeight: "600",
  },
});
