import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import BackBar from "../Common/BackBar";
// import FoundersData from "../../assets/Founder.json";
import FounderCard from "./FounderCard";

const founders = [
  {
    name: "Aniket Sarkar",
    role: "Founder",
    url: require("../../assets/Images/Aniket.jpg"),
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,",
  },
  {
    name: "Arko Provo Sen",
    role: "Co-founder",
    url: require("../../assets/Images/f1.jpg"),
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,",
  },
];

const Founders = () => {
  // console.log(FoundersData.founders);
  return (
    <>
      <BackBar title={"Founders"} />
      <ScrollView>
        <View style={styles.foundersContainer}>
          {founders.map((item, index) => (
            <FounderCard
              key={index}
              name={item.name}
              role={item.role}
              about={item.about}
              url={item.url}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Founders;

const styles = StyleSheet.create({
  foundersContainer: {
    marginHorizontal: 25,
    marginVertical: 30,
  },
});
