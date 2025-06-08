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
  StyleSheet,
  Keyboard,
} from 'react-native';
import {INPUT_HEIGHT, INPUT_TITLE, IS_ANDROID, IS_IOS} from '../Utils/helperFn';
import Images from '../Utils/Images';

import {forwardRef, useRef, useState} from 'react';
import {CustomText} from './Title';

interface InputProps {
  isNeedPassword: boolean;
  secureTextEntry: boolean;
  style: object;

  placeholder?: string;
  error?: string;
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
  error,
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
      {error && (
        <CustomText
          style={[
            {
              textAlign: 'left',
              fontSize: INPUT_TITLE,
              fontWeight: 'bold',
              color: Colors.red,
            },
            headingStyle,
          ]}>
          {error}
        </CustomText>
      )}
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

export const OTPInput = ({
  onOTPComplete,
}: {
  onOTPComplete: (otp: string) => void;
}) => {
  const inputRefs = useRef<TextInput[]>([]);
  const [otp, setOtp] = useState(Array(5).fill(''));

  const handleChangeText = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 4) {
        inputRefs.current[index + 1]?.focus();
      } else {
        Keyboard.dismiss(); // Dismiss keyboard on last digit
      }

      const otpString = newOtp.join('');
      if (!newOtp.includes('')) {
        onOTPComplete(otpString);
      }
    } else if (text.length === 5 && /^\d{5}$/.test(text)) {
      // Handle full OTP paste
      const split = text.split('');
      setOtp(split);
      inputRefs.current[4]?.blur();
      onOTPComplete(split.join(''));
    }

    handleKeyPress(text, index);
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e[index] == '') {
      if (otp[index] === '') {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
          const newOtp = [...otp];
          newOtp[index - 1] = '';
          setOtp(newOtp);
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref!)}
          value={digit}
          onChangeText={text => handleChangeText(text, index)}
          keyboardType={IS_IOS === 'ios' ? 'number-pad' : 'numeric'}
          maxLength={1}
          style={styles.otpInput}
          textAlign="center"
          returnKeyType="next"
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    fontSize: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
});
