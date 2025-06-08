import {useSelector} from 'react-redux';
import {TextStyle, StyleProp, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../Utils/Colors';

type CustomTextProps = TextProps & {
  style?: StyleProp<TextStyle>,
};

export const CustomText: React.FC<CustomTextProps> = ({style, ...props}) => {
  //   const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const isDarkMode = false;
  return (
    <Text
      style={[
        styles.defaultText,
        {color: isDarkMode ? Colors.white : Colors.black},
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontWeight: 'condensed',
    textAlign: 'center',
    fontSize: moderateScale(12),
    // fontfamily: AppFonts.RalewayBold,
  },
});
