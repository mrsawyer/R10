import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Session from './Session';
import { _fetchSpeaker } from '../../redux/modules/speakers';

import { styles } from './styles';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentDidMount() {
    if(this.props.sessionData.speaker){
      this.props.fetchSpeaker(this.props.sessionData.speaker);
    }
  }
  render() {
    return(
        <Session session={this.props.sessionData} speaker={this.props.speaker} faves={this.props.favesIds} />
    );
  }
}

function mapStateToProps(state) {
  return {
    speaker: state.speaker.speakerData,
    isLoading: state.speaker.isLoading,
    favesIds: state.faves.favesIds
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchSpeaker(speakerId) {
      dispatch(_fetchSpeaker(speakerId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
