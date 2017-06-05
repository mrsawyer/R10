import { StyleSheet } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  time: {
    backgroundColor: colors.lightGrey,
    fontFamily: typography.fontLight,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});
