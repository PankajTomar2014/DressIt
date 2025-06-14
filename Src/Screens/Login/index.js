import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
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
} from '../../Components/Rest';
import {IS_IOS, showToast} from '../../Utils/helperFn';
import {validateEmail} from '../../Utils/Validation';
import ApiRequest from '../../Services/ApiRequest';
import ApiList from '../../Services/ApiList';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../Redux/userSlice';

export default Login = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('pankaj1011@yopmail.com');
  const [password, setPassword] = useState('12345678');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const validateUser = () => {
    try {
      if (email == '') {
        showToast('e', 'Please enter email');
      } else if (!validateEmail(email).status) {
        showToast('e', 'Please enter valid email');
      } else if (password == '') {
        showToast('e', 'Please enter password');
      } else {
        loginAPI();
      }
    } catch (error) {
      showToast('e', error.message);
    }
  };

  const loginAPI = async () => {
    try {
      setLoading(true);
      const response = await ApiRequest({
        endPoint: ApiList.login,
        method: 'post',
        query: {
          email,
          password,
        },
      });

      if (response.status) {
        showToast('s', response.message);

        const userData = {
          ...response.data.user,
          token: response.data.token,
        };

        dispatch(saveUser(userData));

        setTimeout(() => {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'BottomTab'}],
          });
          setLoading(false);
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
      <KeyboardAvoidingView behavior={IS_IOS ? 'padding' : 'height'}>
        <ScrollView keyboardShouldPersistTaps="always">
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
            editable={!isLoading}
            onChangeText={text => setEmail(text?.trimStart())}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            maxLength={40}
            style={{marginTop: verticalScale(40)}}
            placeholder={'Enter email'}
            value={email}
          />

          <Input
            onChangeText={text => setPassword(text?.trimStart())}
            editable={!isLoading}
            isNeedPassword
            isHide={hidePassword}
            secureTextEntry={hidePassword}
            onPressEye={() => setHidePassword(!hidePassword)}
            placeholder={'Password'}
            onSubmitEditing={text => validateUser()}
            value={password}
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
            isLoading={isLoading}
            onPress={() => validateUser()}
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

          <DontHaveAccount
            onPress={() => props.navigation.navigate('Signup')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
