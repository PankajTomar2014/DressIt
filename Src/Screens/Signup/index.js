import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Images from '../../Utils/Images';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../../Utils/Colors';
import {CustomText} from '../../Components/Title';
import {IconButton, PrimaryButton} from '../../Components/CustomButtons';
import {Input, PhoneInput} from '../../Components/Input';
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
import {showToast} from '../../Utils/helperFn';
import ApiRequest from '../../Services/ApiRequest';
import ApiList from '../../Services/ApiList';
import {Loader} from '../../Components/Loader';
import {validateEmail} from '../../Utils/Validation';

export default Signup = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfrimPassword, setHideConfrimPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailValidate = text => {
    try {
      const trimedText = text.trimStart();
      setEmail(trimedText);
      const {error} = validateEmail(trimedText);
      setEmailError(error || '');
    } catch (error) {
      console.error('Catch Error : -------', error);
      showToast('e', error.message);
    }
  };

  const handleNumberValidate = text => {
    try {
      const trimedText = text.trimStart();
      setPhone(trimedText);
      // setPhone(formatPhoneNumber(trimedText, 'SA'));
    } catch (error) {
      showToast('e', error.message);
    }
  };

  const validateUser = () => {
    try {
      if (firstName) {
        showToast('e', 'Please enter first name');
      } else if (lastName) {
        showToast('e', 'Please enter last name');
      } else if (email) {
        showToast('e', 'Please enter email');
      } else if (!validateEmail(email).status) {
        showToast('e', 'Please enter valid email');
      } else if (phone) {
        showToast('e', 'Please enter phone');
      } else if (password) {
        showToast('e', 'Please enter password');
      } else if (confirmPassword) {
        showToast('e', 'Please enter confirm password');
      } else if (password !== confirmPassword) {
        showToast('e', 'Password and confirm password not matched');
      } else {
        signupAPI();
      }
    } catch (error) {
      showToast('e', error.message);
    }
  };

  const signupAPI = async () => {
    try {
      setLoading(true);
      const response = await ApiRequest({
        endPoint: ApiList.register,
        method: 'post',
        query: {
          name: firstName + ' ' + lastName,
          email: email,
          password: password,
          password_confirmation: password,
          phone: '+91' + phone,
        },
      });
      if (response.status) {
        showToast('s', response.message);
        setTimeout(() => {
          setLoading(false);
          props.navigation.navigate('VerifyOtp', {
            type: 'signup',
          });
        }, 1000);
      } else {
        setLoading(false);
        showToast('e', response.message);
      }
    } catch (error) {
      showToast('e', error.message);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <StatusBaar hidden={false} />
      <ChildHeader title={'Signup'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText title={'Sign Up'} />
        <SubTitleText title={'Enter your email to register.'} />
        <Input
          style={{marginTop: verticalScale(40)}}
          onChangeText={text => {
            const sanitizedText = text
              ?.replace(/[^a-zA-Z\s]/g, '')
              ?.trimStart();
            setFirstName(sanitizedText);
          }}
          value={firstName}
          placeholder={'First Name'}
        />

        <Input
          value={lastName}
          onChangeText={text => {
            const sanitizedText = text
              ?.replace(/[^a-zA-Z\s]/g, '')
              ?.trimStart();
            setLastName(sanitizedText);
          }}
          placeholder={'Last Name'}
        />

        <Input
          placeholder={'Enter email'}
          error={emailError}
          onChangeText={text => handleEmailValidate(text)}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          value={email}
        />
        <PhoneInput
          editable={!isLoading}
          country={'🇮🇳 +91'}
          onChangeText={text => handleNumberValidate(text)}
          placeholder={'Phone Number'}
          keyboardType={'number-pad'}
          autoCapitalize={'none'}
          maxLength={10}
          value={phone}
        />
        <Input
          onChangeText={text => setPassword(text?.trimStart())}
          isNeedPassword
          isHide={hidePassword}
          secureTextEntry={hidePassword}
          onPressEye={() => setHidePassword(!hidePassword)}
          placeholder={'Password'}
          value={password}
        />

        <Input
          onChangeText={text => setConfirmPassword(text?.trimStart())}
          placeholder={'Confirm Password'}
          value={confirmPassword}
          isNeedPassword
          secureTextEntry={hideConfrimPassword}
          isHide={hideConfrimPassword}
          onPressEye={() => setHideConfrimPassword(!hideConfrimPassword)}
          onSubmitEditing={() => validateUser()}
          error={
            password !== confirmPassword
              ? 'Password and Confirm password not matched'
              : ''
          }
        />
        <PrimaryButton
          isLoading={isLoading}
          // onPress={() => showToast('e', 'okokoko')}
          onPress={() => signupAPI()}
          // onPress={() =>
          //   props.navigation.navigate('VerifyOtp', {
          //     type: 'signup',
          //   })
          // }
          style={{marginTop: verticalScale(30)}}
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
