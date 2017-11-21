import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

const SessionHeader = ({time}) => {
  return (
    <View>
      <Text style={styles.time}>{moment.unix(time).format('h:mm A')}</Text>
    </View>
  );
}

export default SessionHeader;
