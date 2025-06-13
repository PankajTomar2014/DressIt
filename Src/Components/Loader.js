import {ActivityIndicator, View} from 'react-native';

import {useSelector} from 'react-redux';
import Colors from '../Utils/Colors';
import {verticalScale} from 'react-native-size-matters';

export const Loader = () => {
  const isDarkMode = false;
  // const isDarkMode = useColorScheme() == 'dark';
  return (
    <View
      style={{
        height: verticalScale(200),
        width: '90%',
        backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? Colors.bgColor : Colors.white,
      }}>
      <ActivityIndicator
        color={isDarkMode ? Colors.white : Colors.primaryColor}
        size="large"
      />
    </View>
  );
};
