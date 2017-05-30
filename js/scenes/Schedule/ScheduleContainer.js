import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import Schedule from './Schedule';

class ScheduleContainer extends Component {

  static propTypes = {

  }
  constructor() {
    super();
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  render() {
    return(
      <Schedule />
    );
  }
}

export default ScheduleContainer;
