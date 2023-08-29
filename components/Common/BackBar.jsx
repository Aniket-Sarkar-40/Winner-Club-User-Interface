import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Appbar } from "react-native-paper";
import { COLORS } from "../../constant/Theme";

const BackBar = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={{ backgroundColor: COLORS.lightPrimary }}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default BackBar;
