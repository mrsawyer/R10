import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import { goToSession } from '../../lib/navigationHelpers';

const SessionItem = ({currentNavigatorUID, rowData}) => {
  return (
    <TouchableHighlight
    onPress={() => goToSession(currentNavigatorUID, rowData)}
    underlayColor="#999999"
    >
      <View>
        <Text>
          {rowData.description}
          {rowData.location}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default SessionItem;
