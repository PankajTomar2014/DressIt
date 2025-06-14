import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  Alert,
  SafeAreaView,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {saveUser} from '../../Redux/userSlice';
import {useDispatch} from 'react-redux';
import Images from '../../Utils/Images';
import Colors from '../../Utils/Colors';
import {CustomText} from '../../Components/Title';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const WelcomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      isUserLoggedIn();
    }, 2500);
  }, []);

  const isUserLoggedIn = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const isLoggedIn = JSON.parse(user);
      if (isLoggedIn) {
        dispatch(saveUser(isLoggedIn));

        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTab'}],
        });
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <CustomText style={styles.logoText}>DRESS iT</CustomText>

      <Image
        source={Images.appLogo}
        style={styles.image}
        resizeMode="contain"
      />

      <CustomText style={styles.title}>Welcome to DRESS iT</CustomText>

      <CustomText style={styles.subtitle}>
        Powering Fast, Secure and Borderless Payments !
      </CustomText>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        activeOpacity={1}
        style={styles.startButton}>
        <Text style={styles.startText}>Let's Start</Text>
      </TouchableOpacity>

      <CustomText
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Login
      </CustomText>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  logoText: {
    color: Colors.primaryColor,
    fontSize: moderateScale(28),
    fontWeight: 'bold',
  },
  image: {
    width: verticalScale(200),
    height: verticalScale(200),
    marginVertical: verticalScale(30),
  },
  title: {
    color: Colors.primaryColor,
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.primaryColor,
    fontSize: moderateScale(16),
    textAlign: 'center',
    marginBottom: verticalScale(30),
  },
  startButton: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(40),
    borderRadius: 30,
    marginBottom: verticalScale(20),
  },
  startText: {
    color: Colors.white,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  loginText: {
    color: Colors.primaryColor,
    fontSize: moderateScale(15),
    textDecorationLine: 'underline',
  },
});
