import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../constant/Theme";
import { Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfile,
  changePassword,
  updateProfilePicture,
} from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";
import { useNavigation } from "@react-navigation/native";
import Loader from "./Loader";
import Icon from "react-native-vector-icons/Feather";
import BackBar from "./BackBar";

const Updation = ({ title }) => {
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.profile);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [see1, setSee1] = useState(true);
  const [see2, setSee2] = useState(true);
  const [see3, setSee3] = useState(true);

  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const selectFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        multiple: false,
      });

      if (!result.cancelled) {
        setProfile(result.assets[0]);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const submitHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("file", {
        uri: profile.uri,
        type: profile.mimeType,
        name: profile.name,
      });

      await dispatch(updateProfile(formData));
      setEmail("");
      setName("");
      setProfile("");
      dispatch(loadUser());
      navigation.navigate("profile");
    } catch (error) {
      alert(error);
    }
  };

  const submitHandler2 = async () => {
    await dispatch(changePassword(oldPassword, newPassword, confirmPassword));
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    navigation.navigate("profile");
  };

  const submitHandler3 = async () => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: profile.uri,
        type: profile.mimeType,
        name: profile.name,
      });

      await dispatch(updateProfilePicture(formData));
      setProfile("");
      dispatch(loadUser());
      navigation.navigate("profile");
    } catch (error) {
      alert(error);
    }
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <BackBar title={`Update ${title}`} />
      <View style={styles.mainContainer}>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.firstBox}>
            <View style={styles.imgContainer}>
              <Image
                source={require("../../assets/Images/update.png")}
                style={styles.img}
              />
            </View>
            {title === "Profile" ? (
              <View style={styles.container}>
                <Text style={styles.text}>Update {title}</Text>
                <View style={{ width: "70%" }}>
                  <Text style={styles.name}>Name :</Text>

                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                  />
                  <Text style={styles.name}>Email :</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <Text style={styles.name}>
                    Profile Picture :{" "}
                    <Text style={styles.imageName}>
                      {profile ? profile.name : null}
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={selectFile}
                  >
                    <Text style={styles.buttonTextStyle}>Select File</Text>
                  </TouchableOpacity>
                </View>

                <Button
                  disabled={!email || !name || !profile}
                  style={styles.btn}
                  onPress={submitHandler}
                >
                  <Text style={{ color: COLORS.white }}>Submit</Text>
                </Button>
              </View>
            ) : title === "Password" ? (
              <View style={styles.container}>
                <Text style={styles.text}>Update {title}</Text>
                <View style={{ width: "70%" }}>
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      secureTextEntry={see1}
                      style={styles.input}
                      placeholder="Old Password"
                      value={oldPassword}
                      onChangeText={setOldPassword}
                    />
                    <Icon
                      name={see1 ? "eye" : "eye-off"}
                      size={25}
                      onPress={() => setSee1(!see1)}
                      style={{ position: "absolute", right: 10, top: 26 }}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      secureTextEntry={see2}
                      style={styles.input}
                      placeholder="New Password"
                      value={newPassword}
                      onChangeText={setNewPassword}
                    />
                    <Icon
                      name={see2 ? "eye" : "eye-off"}
                      size={25}
                      onPress={() => setSee2(!see2)}
                      style={{ position: "absolute", right: 10, top: 26 }}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      secureTextEntry={see3}
                      style={styles.input}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                    />
                    <Icon
                      name={see3 ? "eye" : "eye-off"}
                      size={25}
                      onPress={() => setSee3(!see3)}
                      style={{ position: "absolute", right: 10, top: 26 }}
                    />
                  </View>
                </View>

                <Button
                  disabled={!oldPassword || !newPassword || !confirmPassword}
                  style={styles.btn}
                  onPress={submitHandler2}
                >
                  <Text style={{ color: COLORS.white }}>Submit</Text>
                </Button>
              </View>
            ) : (
              <View style={styles.container}>
                <Text style={styles.text}>Update {title}</Text>
                <View style={{ width: "70%" }}>
                  <Text style={styles.name}>
                    Profile Picture :{" "}
                    <Text style={styles.imageName}>
                      {profile ? profile.name : null}
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={selectFile}
                  >
                    <Text style={styles.buttonTextStyle}>Select File</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  disabled={!profile}
                  style={styles.btn}
                  onPress={submitHandler3}
                >
                  <Text style={{ color: COLORS.white }}>Submit</Text>
                </Button>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.lightWhite,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  firstBox: {
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 15,
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
    width: "100%",
  },
  btn: {
    backgroundColor: "#1abebe",
    padding: 5,
    width: "70%",
  },
  name: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    fontWeight: "500",
  },
  imageName: {
    fontSize: SIZES.small,
    color: COLORS.light,
    fontWeight: "500",
  },
  imgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: 350,
    objectFit: "contain",
  },
  text: {
    fontSize: SIZES.xxLarge,
    fontWeight: "700",
    color: COLORS.dark,
    paddingBottom: 20,
  },
  buttonTextStyle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: COLORS.tertiary,
    textAlign: "center",
    borderRadius: 20,
    marginVertical: 8,
  },
});

export default Updation;
