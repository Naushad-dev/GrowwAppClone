import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '@react-navigation/native';

const CustomText = ({
  children,
  fontFamily = FONTS.Regular,
  variant = 'body',
  fontSize,
  onLayout,
  numberOfLines,
  style,
}) => {
  const {colors} = useTheme();
  let computedSize;

  switch (variant) {
    case 'h1':
      computedSize = RFValue(fontSize || 22);
      break;
    case 'h2':
      computedSize = RFValue(fontSize || 20);
      break;
    case 'h3':
      computedSize = RFValue(fontSize || 18);
      break;
    case 'h4':
      computedSize = RFValue(fontSize || 18);
      break;
    case 'h5':
      computedSize = RFValue(fontSize || 16);
      break;
    case 'h6':
      computedSize = RFValue(fontSize || 14);
      break;
    case 'h6':
      computedSize = RFValue(fontSize || 12);
      break;
  }

  const fontFamilyStyle = {
    fontFamily:
      fontFamily === FONTS.Black
        ? 'Roboto-Black'
        : fontFamily === FONTS.Bold
        ? 'Roboto-Bold'
        : fontFamily === FONTS.Light
        ? 'Roboto-Light'
        : fontFamily === FONTS.Medium
        ? 'Roboto-Medium'
        : fontFamily === FONTS.Number
        ? 'Manrope-Regular'
        : fontFamily === FONTS.NumberSemiBold
        ? 'Manrope-SemiBold'
        : fontFamily === FONTS.Lato
        ? 'Lato-Regular'
        : fontFamily === FONTS.Thin
        ? 'Roboto-Thin'
        : 'Roboto-Regular',
  };

  return (
    <Text
      onLayout={onLayout}
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
      style={[
        styles.text,
        {
          color: colors.text,
          fontSize: computedSize,
        },
        fontFamilyStyle,
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
