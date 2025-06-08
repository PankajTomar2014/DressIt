import {Image, View} from 'react-native';
import Images from '../Utils/Images';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {IconButton} from './CustomButtons';
import {CustomText} from './Title';
import {HEADER_HEIGHT} from '../Utils/helperFn';
import Colors from '../Utils/Colors';
import {StatusBaar} from './Rest';

export const ChildHeader = ({title, backPress}) => {
  const isDarkMode = false;
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: verticalScale(20),
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        height: HEADER_HEIGHT,
        paddingLeft: scale(10),
        alignItems: 'center',
      }}>
      <IconButton
        iconStyle={{
          tintColor: isDarkMode ? Colors.white : Colors.black,
          height: verticalScale(24),
          width: verticalScale(24),
        }}
        style={{
          justifyContent: 'center',
        }}
        icon={Images.backArrow}
        onPress={() => (backPress ? backPress() : navigation.goBack())}
      />
      {/* <CustomText
        style={{
          alignSelf: 'center',
          fontSize: moderateScale(15),
        }}>
        {title}
      </CustomText> */}
    </View>
  );
};
