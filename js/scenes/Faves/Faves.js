import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';

import SessionItem from '../../components/SessionItem';
import SessionHeader from '../../components/SessionHeader';

const Faves = ( {sessions, faves} ) => {
  console.log(sessions, faves)
  return (
      <ListView
        dataSource={sessions}
        renderRow={rowData => <SessionItem
                    currentNavigatorUID = "faves"
                    rowData = {rowData}
                    faves={ faves } />
                  }
        renderSectionHeader={(sectionData, time) => <SessionHeader time={time} />}
      />
  );
}

export default Faves;
