import { StyleSheet } from 'react-native';
import { typography, colors } from '../../config/styles';

export const styles = StyleSheet.create({
  speakerimage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  container: {
    flex: 1,
  },
  location: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    padding: 5
  },
  linearGradient: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    borderRadius: 30,
    width: 250
  },
  icon: {
    right: 5
  },
  button: {
    alignSelf: 'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: typography.fontMain,
    padding: 10
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontFamily: typography.fontLight,
    padding: 5
  },
  time: {
    color: colors.red,
    fontFamily: typography.fontMain,
    padding: 10
  },
  present: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey
  },
  speaker: {
    padding: 10
  },
  faves: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    fontFamily: typography.fontMain,
  }
})
