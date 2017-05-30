import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';

const CodeConduct = ({item, i}) => {
  return (
    <View key={i+Date.now()}>
      <Text style={styles.codetitle}>{item.title}</Text>
      <Text style={styles.paragraph}> {item.description}</Text>
    </View>
  );
}

export default CodeConduct;
