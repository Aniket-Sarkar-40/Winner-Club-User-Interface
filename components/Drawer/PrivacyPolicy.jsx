import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import BackBar from "../Common/BackBar";
import { COLORS, SIZES } from "../../constant/Theme";

const PrivacyPolicy = () => {
  return (
    <>
      <BackBar title={"Privacy Policy"} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Winner's Club</Text>
          <Text>
            At Winner's Club, we understand the importance of privacy and are
            committed to protecting the personal information of our users. This
            privacy policy outlines how we collect, use, disclose, and protect
            your personal information. Information we collect: Personal
            information, such as your name, email address, and billing
            information, when you register for our services Information about
            your usage of our services, such as your activity logs and device
            information Information you provide when you communicate with us,
            such as through customer support or surveys How we use your
            information: To provide and improve our services to you To
            communicate with you about updates and promotions related to our
            services To respond to your customer service requests and inquiries
            To comply with legal obligations and prevent fraud Disclosure of
            your information: We may disclose your personal information to
            third-party service providers that assist us in providing our
            services, such as cloud hosting and payment processing services. We
            may also disclose your personal information if required by law or in
            response to a court order. Security of your information: We take
            reasonable measures to protect your personal information from
            unauthorized access, disclosure, or misuse. However, we cannot
            guarantee the security of your personal information transmitted to
            our services, and you provide your personal information at your own
            risk. Your choices: You can access, correct, or delete your personal
            information by contacting us at replywinnersclub@gmail.com. You can
            choose to opt-out of promotional emails by following the
            instructions in the email or contacting us at
            replywinnersclub@gmail.com. Updates to this privacy policy: We may
            update this privacy policy from time to time, and any changes will
            be posted on our website. Contact us: If you have any questions or
            concerns about this privacy policy, please contact us at{" "}
            <Text style={{ color: COLORS.dark }}>
              replywinnersclub@gmail.com.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    color: COLORS.dark,
    marginBottom: 20,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    color: COLORS.lightWhite,
  },
});
