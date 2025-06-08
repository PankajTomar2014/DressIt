import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  ImageProps,
  ImageStyle,
  ImageResizeMode,
  Image,
} from 'react-native';
import Colors from '../Utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

import {INPUT_HEIGHT, IS_ANDROID, SCREEN_HEIGHT} from '../Utils/helperFn';

interface PrimaryButtonProps {
  onPress: () => void;
  isLoading: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  isLoading,
  title,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      activeOpacity={0.9}>
      <LinearGradient
        colors={[Colors.primaryBlue, Colors.primaryPink]} // blue to purple gradient like in your image
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.button, style]}>
        {isLoading ? (
          <ActivityIndicator color={Colors.white} size="large" />
        ) : (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

interface IconButtonProps {
  resizeMode: ImageResizeMode;
  onPress: () => void;
  iconStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<ViewStyle>;
  icon: ImageProps;
}
export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon,
  resizeMode,
  iconStyle,
  style,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        {
          height: verticalScale(40),
          width: verticalScale(40),
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      <Image
        resizeMode={resizeMode ? resizeMode : 'contain'}
        style={[
          {height: verticalScale(20), width: verticalScale(20)},
          iconStyle,
        ]}
        source={icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: verticalScale(20),
    flexDirection: 'row',
    height: verticalScale(40),
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primaryColor,
  },
  text: {
    fontSize: moderateScale(17),
    color: 'white',
  },
});
