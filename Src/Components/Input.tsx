import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../Utils/Colors';
import {
  Image,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  ViewStyle,
  TextStyle,
  Pressable,
  ViewProps,
  TextInputProps,
} from 'react-native';
import {INPUT_HEIGHT, INPUT_TITLE, IS_ANDROID, IS_IOS} from '../Utils/helperFn';
import Images from '../Utils/Images';

import {forwardRef} from 'react';
import {CustomText} from './Title';

interface InputProps {
  isNeedPassword: boolean;
  secureTextEntry: boolean;
  style: object;

  placeholder?: string;
  headingStyle: object;
  inputStyle: object;
  onPressEye: () => void;
  textViewStyle: ViewStyle;
  isHide?: boolean;
}

export const Input: React.FC<InputProps> = ({
  isNeedPassword,
  onPressEye,
  isHide,

  style,
  placeholder,
  inputStyle,
  headingStyle,
  textViewStyle,
  ...props
}) => {
  const isDarkMode = false;
  return (
    <View
      style={[
        {
          alignSelf: 'center',
          width: '85%',
          justifyContent: 'center',
        },
        style,
      ]}>
      {placeholder && (
        <CustomText
          style={[
            {
              textAlign: 'left',
              fontSize: INPUT_TITLE,
              fontWeight: 'bold',
              color: Colors.black,
            },
            headingStyle,
          ]}>
          {placeholder}
        </CustomText>
      )}
      <View
        style={[
          {
            backgroundColor: Colors.dimGray,

            height: INPUT_HEIGHT,
            alignItems: 'center',
            width: '100%',
            borderRadius: scale(10),
            flexDirection: 'row',
            alignSelf: 'center',
            marginVertical: verticalScale(5),
          },
          textViewStyle,
        ]}>
        <TextInput
          style={[
            {
              backgroundColor: Colors.dimGray,
              fontSize: moderateScale(13),
              paddingHorizontal: scale(15),
              height: INPUT_HEIGHT - 10,
              borderRadius: scale(10),
              width: isNeedPassword ? '85%' : '100%',
              color: isDarkMode ? Colors.white : Colors.primaryColor,
              // backgroundColor: isDarkMode ? Colors.bgColor : Colors.white,
            },
            inputStyle,
          ]}
          {...props}
          selectionColor={Colors.blue}
          cursorColor={Colors.blue}
          autoCorrect={false}
          placeholderTextColor={Colors.lightSkyblue}
        />
        {isNeedPassword && (
          <HidePassword isHide={isHide || false} onPressEye={onPressEye} />
        )}
      </View>
    </View>
  );
};

interface HidePasswordProps {
  isHide: boolean;
  onPressEye: () => void;
}

export const HidePassword: React.FC<HidePasswordProps> = ({
  isHide,
  onPressEye,
}) => {
  const isDarkMode = false;
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        height: verticalScale(35),
        width: verticalScale(35),
      }}
      onPress={onPressEye}>
      <Image
        source={isHide ? Images.eyeClose : Images.eyeOpen}
        resizeMode="contain"
        style={{
          height: verticalScale(25),
          width: verticalScale(25),
        }}
      />
    </TouchableOpacity>
  );
};
