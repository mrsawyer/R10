import { StyleSheet } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  speakerimage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    margin: 20
  },
  linearGradient: {
    padding: 10,
    borderRadius: 30,
    width: 250
  },
  button: {
    alignSelf: 'center'
  },
  readMore: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    fontFamily: typography.fontMain,
  },
  container: {
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    flex: 1
  },
  body: {
    backgroundColor: colors.black,
    flex: 1
  },
  name: {
    textAlign: 'center',
    padding: 20,
    fontFamily: typography.fontMain,
    fontWeight: "bold",
    fontSize: 24,
  },
  bio: {
    textAlign: 'center',
    padding: 20,
    fontSize: 18,
    fontFamily: typography.fontLight,
  }
});
