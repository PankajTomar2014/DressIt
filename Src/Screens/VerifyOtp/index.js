import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {verticalScale} from 'react-native-size-matters';

import Colors from '../../Utils/Colors';

import {PrimaryButton} from '../../Components/CustomButtons';
import {StatusBaar, SubTitleText, TitleText} from '../../Components/Rest';
import styles from './styles';
import {ChildHeader} from '../../Components/Headers';
import {showToast} from '../../Utils/helperFn';
import ApiRequest from '../../Services/ApiRequest';
import ApiList from '../../Services/ApiList';

export default OtpVerify = props => {
  const {type, data} = props.route.params;

  let textInput1 = useRef(null);
  let textInput2 = useRef(null);
  let textInput3 = useRef(null);
  let textInput4 = useRef(null);
  let textInput5 = useRef(null);
  let textInput6 = useRef(null);

  const isDarkMode = false;

  const [email, setEmail] = useState('');
  const [resendAvailable, setResendAvailable] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [countState, setCountState] = useState(true);

  const [otp, setOTP] = useState('');
  const [input, setInput] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
  });

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    } else {
      setResendAvailable(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    console.log('Resending OTP...');
    setTimer(60);
    setResendAvailable(false);
    // Trigger OTP resend API here
  };

  const onChangeText = (name, text) => {
    if (name == 'otp1') {
      setInput({...input, value1: text});
      textInput2.focus();
      if (text.length == 0) {
        textInput1.focus();
      }
    }
    if (name == 'otp2') {
      setInput({...input, value2: text});
      textInput3.focus();
      if (text.length == 0) {
        textInput1.focus();
      }
    }
    if (name == 'otp3') {
      setInput({...input, value3: text});
      textInput4.focus();
      if (text.length == 0) {
        textInput2.focus();
      }
    }

    if (name == 'otp4') {
      setInput({...input, value4: text});
      textInput5.focus();
      if (text.length == 0) {
        textInput3.focus();
      }
    }
    if (name == 'otp5') {
      setInput({...input, value5: text});
      textInput6.focus();
      if (text.length == 0) {
        textInput4.focus();
      }
    }
    if (name == 'otp6') {
      setInput({...input, value6: text});

      if (text.length == 0) {
        textInput5.focus();
      }
      setOTP(
        input.value1 +
          input.value2 +
          input.value3 +
          input.value4 +
          input.value5 +
          text,
      );
    }
  };

  const onSubmitOTP = async () => {
    try {
      Keyboard.dismiss();
      if (otp.length < 6) {
        showToast('e', 'Please enter 6 digit OTP');
      } else {
        if (type == 'signup') {
          verifySignupOtpAPI();
        } else if (type == 'ForgotPassword') {
          props.navigation.navigate('ResetPassword');
        } else {
          showToast('e', 'Something went wrong, try again!');
        }
      }
    } catch (error) {
      showToast('e', error.message);
    }
  };

  const verifySignupOtpAPI = async () => {
    try {
      setLoading(true);
      const response = await ApiRequest({
        endPoint: ApiList.verifyOtp,
        method: 'post',
        query: {
          email: data?.email,
          otp,
        },
      });

      if (response.status) {
        showToast('s', response.message);
        setTimeout(() => {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.bgColor : Colors.white,
      }}>
      <StatusBaar hidden={false} />
      <ChildHeader title={'OTP Verify'} />
      <ScrollView keyboardShouldPersistTaps="always">
        <TitleText
          link={data?.email ? data?.email : 'hello@example.com'}
          title={'We sent link to your Email '}
        />
        <SubTitleText
          title={
            'Check your email and enter the code, or just click the link we sent you.'
          }
        />
        <View style={styles.containerInput}>
          <TextInput
            maxLength={1}
            cursorColor={Colors.primaryColor}
            ref={input => (textInput1 = input)}
            style={[
              styles.underlineStyleBase,
              {
                borderColor:
                  input.value1.length > 0
                    ? Colors.primaryColor
                    : Colors.lineGray,
                backgroundColor:
                  input.value1.length == 1 ? Colors.dimBlue : Colors.white,
              },
            ]}
            onChangeText={text => onChangeText('otp1', text)}
            value={input.value1}
            textAlign="center"
            returnKeyType="done"
            keyboardType="numeric"
          />
          <TextInput
            maxLength={1}
            cursorColor={Colors.primaryColor}
            ref={input => (textInput2 = input)}
            style={[
              styles.underlineStyleBase,
              {
                borderColor:
                  input.value2.length > 0
                    ? Colors.primaryColor
                    : Colors.lineGray,
                backgroundColor:
                  input.value2.length == 1 ? Colors.dimBlue : Colors.white,
              },
            ]}
            onChangeText={text => onChangeText('otp2', text)}
            value={input.value2}
            textAlign="center"
            returnKeyType="done"
            keyboardType="numeric"
          />
          <TextInput
            maxLength={1}
            cursorColor={Colors.primaryColor}
            ref={input => (textInput3 = input)}
            style={[
              styles.underlineStyleBase,
              {
                borderColor:
                  input.value3.length > 0
                    ? Colors.primaryColor
                    : Colors.lineGray,
                backgroundColor:
                  input.value3.length == 1 ? Colors.dimBlue : Colors.white,
              },
            ]}
            onChangeText={text => onChangeText('otp3', text)}
            value={input.value3}
            textAlign="center"
            returnKeyType="done"
            keyboardType="numeric"
          />
          <TextInput
            maxLength={1}
            cursorColor={Colors.primaryColor}
            ref={input => (textInput4 = input)}
            style={[
              styles.underlineStyleBase,
              {
                borderColor:
                  input.value4.length > 0
                    ? Colors.primaryColor
                    : Colors.lineGray,
                backgroundColor:
                  input.value4.length == 1 ? Colors.dimBlue : Colors.white,
              },
            ]}
            onChangeText={text => onChangeText('otp4', text)}
            value={input.value4}
            textAlign="center"
            returnKeyType="done"
            keyboardType="numeric"
          />
          <TextInput
            maxLength={1}
            cursorColor={Colors.primaryColor}
            ref={input => (textInput5 = input)}
            style={[
              styles.underlineStyleBase,
              {
                borderColor:
                  input.value5.length > 0
                    ? Colors.primaryColor
                    : Colors.lineGray,
                backgroundColor:
                  input.value5.length == 1 ? Colors.dimBlue : Colors.white,
              },
            ]}
            onChangeText={text => onChangeText('otp5', text)}
            value={input.value5}
            textAlign="center"
            returnKeyType="done"
            keyboardType="numeric"
          />
          <TextInput
            maxLength={1}
            cursorColor={Colors.primaryColor}
            ref={input => (textInput6 = input)}
            style={[
              styles.underlineStyleBase,
              {
                borderColor:
                  input.value6.length > 0
                    ? Colors.primaryColor
                    : Colors.lineGray,
                backgroundColor:
                  input.value6.length == 1 ? Colors.dimBlue : Colors.white,
              },
            ]}
            onChangeText={text => onChangeText('otp6', text)}
            value={input.value6}
            textAlign="center"
            returnKeyType="done"
            keyboardType="numeric"
          />
        </View>

        {!countState && (
          <TouchableOpacity
            onPress={() => setCountState(true)}
            activeOpacity={0.9}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Text
              style={{
                fontSize: 15,
                textDecorationLine: 'underline',

                color: Colors.primaryColor,
              }}>
              {'Didn’t receive the code?'}
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.timerRow}>
          {resendAvailable ? (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendText}>Resend OTP</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.timerText}>Resend in {timer}s</Text>
          )}
        </View>

        <PrimaryButton
          style={{marginTop: verticalScale(30)}}
          onPress={() => onSubmitOTP()}
          isLoading={isLoading}
          title={'Verify'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
