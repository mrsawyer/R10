import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  codetitle: {
    color: 	colors.purple,
    fontWeight: "bold",
    fontFamily: typography.fontMain
  },
  sign: {
    color: colors.purple,
    width: 10,
    fontFamily: typography.fontMain,
    marginRight: 5
  },
  conduct: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5
  },
  paragraph: {
    height: 0,
    overflow: 'hidden',
    fontFamily: typography.fontLight,
    margin: 5,
  }
})
