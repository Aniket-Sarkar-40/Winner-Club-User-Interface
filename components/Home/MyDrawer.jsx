import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Drawer } from "react-native-paper";
import { COLORS } from "../../constant/Theme";

const { width } = Dimensions.get("window");
const MyDrawer = () => {
  const [active, setActive] = React.useState("");
  const navigation = useNavigation();

  return (
    <Drawer.Section style={styles.container} showDivider={false}>
      <View style={{}}>
        <Drawer.Item
          label="Know Us"
          active={active === "first"}
          onPress={() => {
            setActive("first");
            navigation.navigate("knowUs");
          }}
        />
        <Drawer.Item
          label="Privacy Policy"
          active={active === "second"}
          onPress={() => {
            setActive("second");
            navigation.navigate("privacy");
          }}
        />
        <Drawer.Item
          label="FAQ"
          active={active === "third"}
          onPress={() => {
            setActive("third");
            navigation.navigate("faq");
          }}
        />
        <Drawer.Item
          label="Founders"
          active={active === "fourth"}
          onPress={() => {
            setActive("fourth");
            navigation.navigate("founders");
          }}
        />
      </View>
    </Drawer.Section>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    // height: height / 4,
    position: "absolute",
    backgroundColor: COLORS.lightPrimary,
    zIndex: 50,
    // justifyContent: "flex-end",
    right: 20,
    top: 100,
    borderRadius: 20,
    paddingVertical: 20,
    borderTopRightRadius: 0,
  },
});
