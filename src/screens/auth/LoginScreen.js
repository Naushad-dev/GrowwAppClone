import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import LoginImageLight from '../../assets/images/login_animation_light.png';
import LoginImageDark from '../../assets/images/login_dark_animation.png';
import {useColorScheme} from 'react-native';
import {
  normalizeHeight,
  normalizeModerately,
  screenHeight,
  screenWidth,
} from '../../utils/Scaling';
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import GoogleIcon from '../../assets/images/google.png';
import Icon from "react-native-vector-icons/Ionicons"
import TouchableText from '../../components/global/TouchableText';
import BottomText from '../../components/auth/BottomText';
import {  onGoogleButtonPress } from '../../redux/SocialLogin';
import { navigate } from '../../utils/navigationUtils';



// Somewhere in your code

const LoginScreen = () => {
  
  

  const theme = useColorScheme();



  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Bold}>
          Together We Grow
        </CustomText>
        <CustomText
          variant="h6"
          fontFamily={FONTS.Regular}
          style={styles.subText}>
          {' '}
          Invest • Pay • Loans
        </CustomText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={theme === 'dark' ? LoginImageDark : LoginImageLight}
          />
        </View>
        <SocialLoginButton
          text={'Google'}
          icon={<Image source={GoogleIcon} style={styles.gimg} />}
          onPress={onGoogleButtonPress}

        />
        <SocialLoginButton
        text={'Apple'}
        icon={<Icon name='logo-apple' size={20} color={"black"}/>}
        onPress={()=>Alert.alert("Under Developemt")}
      />
      <TouchableText onPress={()=>navigate("EmailScreen")} firstText={"Use Other Email ID"} style={styles.touchText}/>
      <BottomText />

      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imageContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(25),
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  gimg: {
    height: 20,
    width: 20,
  },
  touchText: {
    marginVertical: 30,
    marginTop: 15,
  },
});
