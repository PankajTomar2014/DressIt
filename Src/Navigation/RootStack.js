import * as React from 'react';
import {View, Text} from 'react-native';
import {
  createStaticNavigation,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from '@react-navigation/elements';
import Login from '../Screens/Login';
import ForgotPassword from '../Screens/ForgotPassword';
import Signup from '../Screens/Signup';
import ResetPassword from '../Screens/ResetPassword';
import VerifyOtp from '../Screens/VerifyOtp';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationDuration: 100,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
