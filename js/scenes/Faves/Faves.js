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

import { queryFaves } from '../../config/models';

const favesArray = queryFaves();

const Faves = ( {faves} ) => {
  console.log(faves)
  return (
      <ListView
        dataSource={faves}
        renderRow={rowData => <SessionItem
                    currentNavigatorUID = "faves"
                    rowData = {rowData} />
                  }
        renderSectionHeader={(sectionData, time) => <SessionHeader time={time} />}
      />
  );
}

export default Faves;
