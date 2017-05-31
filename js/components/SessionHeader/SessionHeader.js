import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

const SessionHeader = ({time}) => {
  return (
    <View>
      <Text>{moment.unix(time).format('h:mm A')}</Text>
    </View>
  );
}

export default SessionHeader;
