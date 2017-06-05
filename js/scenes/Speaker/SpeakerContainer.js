import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';

class SpeakerContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About the Speaker',
    }
  }
  render() {
    return(
      <Speaker speaker={this.props.speakerData} />
    );
  }
}

export default SpeakerContainer;
