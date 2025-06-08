import {StyleSheet, Dimensions, Platform} from 'react-native';
import {IS_IOS, IS_ANDROID} from '../../../Utils/CommanFunctions';
import Colors from '../../Utils/Colors';

import {moderateScale, verticalScale} from 'react-native-size-matters';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export default StyleSheet.create({
  underlineStyleBase: {
    width: '13%',
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    color: Colors.primaryColor,
    fontSize: moderateScale(20),
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  bottomLink: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    // color: Colors.lightVoilet,
    alignSelf: 'center',
    color: Colors.darkVoilet,
    textDecorationLine: 'underline',
  },
  bottomTxt: {
    fontSize: moderateScale(14), // fontFamily: AppFonts.RobotoMedium,
    color: Colors.lightVoilet,
    alignSelf: 'center',
  },
  remainingTime: {
    fontSize: moderateScale(12),
  },
  containerInput: {
    width: '85%',

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(30),
    alignSelf: 'center',
  },
  bottomContainer: {
    alignSelf: 'center',
  },

  timerRow: {
    alignSelf: 'center',
    marginTop: 20,
  },
  timerText: {
    color: 'gray',
    fontSize: 16,
  },
  resendText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
