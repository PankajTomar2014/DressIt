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
  ForgotPassword,
  Or,
  RememberMe,
  StatusBaar,
  SubTitleText,
  TitleText,
} from '../../Components/Rest';
import {ChildHeader} from '../../Components/Headers';

export default Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ChildHeader title={'Signup'} />
      <ScrollView>
        <TitleText title={'Sign Up'} />
        <SubTitleText title={'Enter your email to register.'} />

        <Input
          style={{marginTop: verticalScale(40)}}
          placeholder={'Enter email'}
          error=""
        />
        <Input
          editable={!isLoading}
          isNeedPassword
          isHide={hidePassword}
          secureTextEntry={hidePassword}
          onPressEye={() => setHidePassword(!hidePassword)}
          placeholder={'Password'}
        />
        <PrimaryButton
          onPress={() =>
            props.navigation.navigate('VerifyOtp', {
              type: 'signup',
            })
          }
          style={{marginTop: verticalScale(50)}}
          title={'Submit & Verify'}
        />
        <DontHaveAccount
          isUserExist={true}
          onPress={() => props.navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
