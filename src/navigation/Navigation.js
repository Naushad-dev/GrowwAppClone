import { View, Text } from 'react-native'
import React from 'react'
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import { navigationRef } from '../utils/navigationUtils'
import { useCustomTheme } from './Theme'
import EmailScreen from '../screens/auth/EmailScreen'

const Stack =createNativeStackNavigator()
const Navigation = () => {
const theme= useCustomTheme()

const MyTheme={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background:theme.colors.background,
        text:theme.colors.text,
        card:theme.colors.card,
        border:theme.colors.border,
        notification:theme.colors.notification,
        primary:theme.colors.primary
    }

} 
  return (
  <NavigationContainer ref={navigationRef} theme={MyTheme} >
  <Stack.Navigator initialRouteName='login'>
  <Stack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
  <Stack.Screen name='login' component={LoginScreen} options={{headerShown:false}}/>
  <Stack.Screen name='EmailScreen' component={EmailScreen} options={{headerShown:false}}/>




  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation