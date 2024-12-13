import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';

const SocialLoginButton = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button]}
      activeOpacity={0.7}>
      {icon}
      <CustomText variant="h8" fontFamily={FONTS.Medium} style={styles.text}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginVertical: 10,
    backgroundColor: Colors.light_background,
    borderWidth: 1,
    borderColor: "#DFDFDF",
    marginHorizontal:10
  },
  text: {
    marginLeft: 10,
    color: 'black',
  },
});
