
import auth from  '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import { Alert } from 'react-native'
import { navigate } from '../utils/navigationUtils';

export async function onGoogleButtonPress() {
    try {
      // Check if device supports Google Play Services
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  
      // Trigger Google Sign-In flow
      const userInfo = await GoogleSignin.signIn();
      console.log(JSON.stringify(userInfo.data,null,2));
      
  
      // Extract the idToken from the result
      const { idToken } = userInfo.data;
  
      if (!idToken) {
        throw new Error('No ID token found in the Google sign-in response');
      }
  
      // Create a credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      // Sign-in the user with the credential
      const user = await auth().signInWithCredential(googleCredential);
      Alert.alert("User Login Suceess","You have been registered",[{
        text:"Okey",
        onPress:()=> navigate("home")
      }])
      console.log('User signed in:', JSON.stringify(user,null,2));
 
    } catch (error) {
      console.error('Error during Google Sign-In:', error.message);
    }
  }  