import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Images from '../../Utils/Images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../../Utils/Colors';
import {CustomText} from '../../Components/Title';
import {IconButton, PrimaryButton} from '../../Components/CustomButtons';
import {Input} from '../../Components/Input';
import {
  DontHaveAccount,
  // ForgotPassword,
  Or,
  RememberMe,
  SubTitleText,
  TitleText,
} from '../../Components/Rest';

export default ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView>
        <TitleText title={'Reset Password'} />
        <SubTitleText
          title={
            'Create a new password for the account below with a different from previous password.'
          }
        />
        <Input
          style={{marginTop: verticalScale(30)}}
          editable={!isLoading}
          isNeedPassword
          isHide={hidePassword}
          secureTextEntry={hidePassword}
          onPressEye={() => setHidePassword(!hidePassword)}
          placeholder={'Password'}
        />
        <Input
          editable={!isLoading}
          isNeedPassword
          isHide={hidePassword}
          secureTextEntry={hidePassword}
          onPressEye={() => setHidePassword(!hidePassword)}
          placeholder={'Confirm Password'}
        />
        <PrimaryButton
          style={{marginTop: verticalScale(50)}}
          title={'Reset Password'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
