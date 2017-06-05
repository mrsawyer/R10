import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  ListView
} from 'react-native';

import SessionItem from '../../components/SessionItem';
import SessionHeader from '../../components/SessionHeader';

import { styles } from './styles';

const Schedule = ( {sessions} ) => {
  return (
      <ListView
        dataSource={sessions}
        renderRow={rowData => <SessionItem
                    currentNavigatorUID = "schedule"
                    rowData = {rowData} />
                  }
        renderSectionHeader={(sectionData, time) => <SessionHeader time={time}
        style={styles.container} />}
      />
  );
}

export default Schedule;
