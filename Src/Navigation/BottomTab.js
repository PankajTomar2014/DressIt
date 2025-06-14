import React, {useRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import * as Animatable from 'react-native-animatable';

import Colors from '../Utils/Colors';
// import Settings from '../Screens/Settings';
// import Dashboard from '../Screens/Dashboard';
// import TransactionHistory from '../Screens/TransactionHistory';
import {verticalScale} from 'react-native-size-matters';
import Images from '../Utils/Images';
import {CustomText} from '../Components/Title';
import {PrimaryButton} from '../Components/CustomButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AnimatedTabIcon = ({focused, source}) => {
  const viewRef = useRef(null);
  const iconRef = useRef(null);
  useFocusEffect(
    useCallback(() => {
      iconRef.current?.transitionTo({color: Colors.white}, 500);
    }, []),
  );

  return (
    <View
      ref={viewRef}
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={source}
        style={{
          width: focused ? 30 : 22,
          height: focused ? 30 : 22,
          tintColor: focused ? Colors.white : Colors.lineGray,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.lineGray,
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
          position: 'absolute',
          marginHorizontal: 20,
          marginBottom: Platform.OS === 'android' ? 15 : 25,
          borderRadius: 20,
          height: verticalScale(55),
          paddingBottom: 5,
          paddingTop: 5,
          ...styles.shadow,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          bottom:
            Platform.OS === 'android' ? verticalScale(1) : verticalScale(15),
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedTabIcon focused={focused} source={Images.apple} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedTabIcon focused={focused} source={Images.google} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedTabIcon focused={focused} source={Images.facebook} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <AnimatedTabIcon focused={focused} source={Images.appLogo} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <PrimaryButton
        onPress={async () => {
          await AsyncStorage.clear();

          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}
        title="Logout"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});
