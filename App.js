import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from './src/navigation/Navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    console.log("Configuration is completed");
    
    GoogleSignin.configure({
      webClientId:'place your id here',
    });
  }, [])

  return (
  
      <Navigation />
   
  );
};

export default App;

const styles = StyleSheet.create({});
