import { StyleSheet } from 'react-native';
import { typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  logoimage: {
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: typography.fontMain
  },
  copy: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: typography.fontLight
  },
  paragraph: {
    margin: 5,
    fontFamily: typography.fontLight
  }
})
