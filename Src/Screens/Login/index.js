import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Images from '../../Utils/Images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../../Utils/Colors';
import {CustomText} from '../../Components/Title';
import {IconButton, PrimaryButton} from '../../Components/CustomButtons';
import {Input} from '../../Components/Input';
import {
  DontHaveAccount,
  ForgotPassword,
  Or,
  RememberMe,
} from '../../Components/Rest';

export default Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <Image
        source={Images.appLogo}
        resizeMode="contain"
        style={{
          marginTop: verticalScale(50),
          height: verticalScale(100),
          alignSelf: 'center',
          width: verticalScale(100),
        }}
      />

      <CustomText
        style={{
          marginVertical: verticalScale(10),
          fontWeight: 'bold',
          fontSize: moderateScale(30),
        }}>
        {'Log In'}
      </CustomText>

      <CustomText style={{fontSize: moderateScale(15)}}>
        {'Enter your login credentials to begain'}
      </CustomText>

      <Input
        style={{marginTop: verticalScale(40)}}
        placeholder={'Enter email'}
      />
      <Input
        editable={!isLoading}
        isNeedPassword
        isHide={hidePassword}
        secureTextEntry={hidePassword}
        onPressEye={() => setHidePassword(!hidePassword)}
        placeholder={'Password'}
      />

      <View
        style={{
          marginVertical: verticalScale(10),
          flexDirection: 'row',
          alignSelf: 'center',
          width: '85%',
          justifyContent: 'space-between',
        }}>
        <RememberMe email={email} />
        <ForgotPassword
          onPress={() => props.navigation.navigate('ForgotPassword')}
        />
      </View>
      <PrimaryButton
        onPress={() => props.navigation.navigate('ForgotPassword')}
        title={'Login'}
      />
      <Or />
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '85%',
        }}>
        <IconButton
          style={{
            marginVertical: verticalScale(10),
            borderWidth: 0.5,
            borderColor: Colors.lineGray,
            backgroundColor: Colors.dimGray,
            width: scale(80),
            borderRadius: scale(10),
          }}
          icon={Images.facebook}
        />
        <IconButton
          style={{
            borderWidth: 0.5,
            borderColor: Colors.lineGray,
            backgroundColor: Colors.dimGray,
            width: scale(80),
            borderRadius: scale(10),
          }}
          icon={Images.google}
        />
        <IconButton
          style={{
            borderWidth: 0.5,
            borderColor: Colors.lineGray,
            backgroundColor: Colors.dimGray,
            width: scale(80),
            borderRadius: scale(10),
          }}
          icon={Images.apple}
        />
      </View>

      <DontHaveAccount onPress={() => props.navigation.navigate('Signup')} />
    </SafeAreaView>
  );
};
