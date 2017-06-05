import { StyleSheet } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 2,
    marginTop: 2
  },
  title: {
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  location: {
    fontFamily: typography.fontLight
  },
  heart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});
