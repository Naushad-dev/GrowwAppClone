import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';

const LoginScreen = () => {
  return (
    <CustomSafeAreaView>
      <CustomText>Login</CustomText>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
