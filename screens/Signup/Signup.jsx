import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Button, HelperText } from "react-native-paper";
import { COLORS } from "../../constant/Theme";
import * as DocumentPicker from "expo-document-picker";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/user";
import Loader from "../../components/Common/Loader";
import Icon from "react-native-vector-icons/Feather";

const { height } = Dimensions.get("window");

const Signup = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [see1, setSee1] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const hasErrors2 = () => {
    return !email.includes("@") && email.length !== 0;
  };
  const hasErrors = () => {
    return password.length < 6 && password.length !== 0;
  };

  const handleImage = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        multiple: false,
      });

      if (!result.cancelled) {
        setAvatar(result.assets[0]);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const registerHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("file", {
        uri: avatar.uri,
        type: avatar.mimeType,
        name: avatar.name,
      });

      await dispatch(register(formData));
      setEmail("");
      setName("");
      setPassword("");
      setAvatar("");
      navigation.navigate("profile");
    } catch (error) {
      alert(error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <View style={styles.mainContainer}>
      <ScrollView style={{ width: "100%" }}>
        <SafeAreaView style={styles.firstBox}>
          {/* <Image
            source={require("../../assets/signup.png")}
            style={styles.image}
          /> */}
          <Avatar.Image
            size={120}
            source={
              avatar ? { uri: avatar.uri } : require("../../assets/avatar.png")
            }
            style={{ backgroundColor: COLORS.primary }}
          />

          <TouchableOpacity onPress={handleImage}>
            <Text style={{ color: COLORS.secondary }}>Change Photo</Text>
          </TouchableOpacity>

          <View style={{ width: "70%", paddingVertical: 20 }}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <HelperText type="error" visible={hasErrors2()}>
              Enter a valid email.
            </HelperText>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <HelperText type="error" visible={hasErrors()}>
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

          <Button
            disabled={!email || !password || !name || !avatar}
            style={styles.btn}
            onPress={registerHandler}
          >
            <Text style={{ color: COLORS.white }}>Sign up</Text>
          </Button>

          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={{ color: COLORS.secondary, height: 30, margin: 20 }}>
              Already have an accout,
              <Text style={{ color: COLORS.primary }}> Login</Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.lightWhite,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    // marginTop: 15,
    fontSize: 15,
    width: "100%",
  },
  btn: {
    backgroundColor: "#1abebe",
    padding: 5,
    width: "70%",
  },
  image: {
    width: 270,
    height: 270,
  },
  firstBox: {
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: height,
  },
});
