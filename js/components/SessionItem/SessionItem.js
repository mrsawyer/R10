import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Platform,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSession } from '../../lib/navigationHelpers';
import { colors } from '../../config/styles';

import { queryFaves } from '../../config/models';

import { styles } from './styles';

const favesArray = queryFaves();

const SessionItem = ({currentNavigatorUID, rowData, faves}) => {
  return (
    <TouchableHighlight
    onPress={() => goToSession(currentNavigatorUID, rowData)}
    underlayColor="#999999"
    style={styles.container}
    >
      <View>
        <Text style={styles.title}>{rowData.title}</Text>
        <View style={styles.heart}>
          <Text style={styles.location}> {rowData.location}
        {faves.includes(rowData.session_id) &&
          <Icon
            name={
              Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'
            }
            size={18}
            color={colors.red}
          />
        }
      </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default SessionItem;
