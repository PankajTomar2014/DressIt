import {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {CustomText} from './Title';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../Utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../Utils/Images';

export const RememberMe = ({email}) => {
  const [rememberEmail, setRememberEmail] = useState(false);

  useEffect(() => {
    checkUsernameSaved();
  }, []);

  const checkUsernameSaved = async () => {
    const isFoundEmail = await AsyncStorage.getItem('email');
    console.log('isFoundEmail---', isFoundEmail);
    if (isFoundEmail) {
      setRememberEmail(true);
    }
  };

  const handleRememberUser = async () => {
    const newValue = !rememberEmail;
    setRememberEmail(newValue);

    if (newValue) {
      await AsyncStorage.setItem('email', email);
      console.log('Email saved :-- ', email);
    } else {
      await AsyncStorage.removeItem('email');
      console.log('Email removed :-- ', email);
    }
  };

  return (
    <Pressable onPress={handleRememberUser} style={styles.rememberBtn}>
      <Image
        source={rememberEmail ? Images.checkSquare : Images.unSquare}
        style={[
          {
            tintColor: Colors.black,
          },
          styles.rememberImage,
        ]}
      />
      <CustomText
        style={{
          left: scale(5),
          color: Colors.black,
          fontSize: moderateScale(13),
        }}>
        {'Remember Me'}
      </CustomText>
    </Pressable>
  );
};

export const ForgotPassword = () => {
  return (
    <CustomText
      onPress={() => null}
      style={{
        color: Colors.black,

        textAlign: 'center',
        fontSize: moderateScale(13),
      }}>
      {'Forgot Password?'}
    </CustomText>
  );
};

export const DontHaveAccount = ({isUserExist}) => {
  return (
    <CustomText
      onPress={() => null}
      style={{
        marginVertical: verticalScale(20),
        color: Colors.black,
        fontWeight: '500',
        textAlign: 'center',
        fontSize: moderateScale(13),
      }}>
      {isUserExist ? 'I already have an Account ' : 'Don’t have an Account? '}
      <CustomText
        onPress={() => null}
        style={{
          textDecorationLine: 'underline',
          color: Colors.primaryColor,
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: moderateScale(13),
        }}>
        {isUserExist ? 'Login' : 'Sign Up'}
      </CustomText>
    </CustomText>
  );
};

export const TitleText = ({title}) => {
  return (
    <CustomText
      style={{
        marginHorizontal: scale(20),
        marginTop: verticalScale(50),
        textAlign: 'left',
        marginVertical: verticalScale(10),
        fontWeight: 'bold',
        fontSize: moderateScale(30),
      }}>
      {title}
    </CustomText>
  );
};
export const SubTitleText = ({title}) => {
  return (
    <CustomText
      style={{
        marginHorizontal: scale(20),
        textAlign: 'left',
        fontSize: moderateScale(15),
      }}>
      {title}
    </CustomText>
  );
};

export const Or = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: verticalScale(10),
        height: verticalScale(25),

        alignItems: 'center',
      }}>
      <Image
        style={{
          tintColor: Colors.lineGray,
          width: '38%',
          marginTop: verticalScale(4),
        }}
        resizeMode={'conatin'}
        source={Images.line}
      />
      <CustomText
        style={{
          fontSize: moderateScale(18),
          color: Colors.blue,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        {' Or '}
      </CustomText>
      <Image
        style={{
          tintColor: Colors.lineGray,
          width: '38%',
          marginTop: verticalScale(4),
        }}
        resizeMode={'conatin'}
        source={Images.line}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rememberBtn: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rememberImage: {
    width: verticalScale(10),

    height: verticalScale(10),
  },
});
