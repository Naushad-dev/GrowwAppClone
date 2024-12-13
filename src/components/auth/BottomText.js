import React from 'react';
import CustomText from '../global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {StyleSheet} from 'react-native';

const UnderlineText = ({text}) => {
  return (
    <CustomText
      variant="h6"
      fontFamily={FONTS.Regular}
      fontSize={10}
      style={styles.underline}>
      {text}
    </CustomText>
  );
};

const BottomText = () => {
  return (
    <>
      <CustomText variant="h6" fontSize={10} fontFamily={FONTS.Regular} style={styles.text}>
        By proceeding. I accept Groww's <UnderlineText text="T&C" />.
        <UnderlineText text="Privacy Policy" />.{' '}
        <UnderlineText text="Tariff Rates" />.
      </CustomText>

      <CustomText variant="h6" fontSize={10} fontFamily={FONTS.Regular} style={styles.text}>
        <UnderlineText text="FATCA Declaration" /> &{' '}
        <UnderlineText text="CIBIL T&C" />
      </CustomText>
    </>
  );
};

const styles = StyleSheet.create({
  text: {opacity: 0.6},
  underline: {textDecorationLine: 'underline'},
});
export default BottomText;
