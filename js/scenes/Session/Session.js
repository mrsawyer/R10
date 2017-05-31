import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import { styles } from './styles';

const Session = ({session, speaker}) => {
  console.log(speaker, session)
  return (
    <View>
      <Text > {session.title}</Text>
      <Text > {session.start_time}</Text>
      <Text > {session.description}</Text>
    </View>
  );
}

export default Session;
