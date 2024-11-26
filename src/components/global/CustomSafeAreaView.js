import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomSafeAreaView = ({children}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
