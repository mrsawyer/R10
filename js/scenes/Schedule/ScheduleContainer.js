import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import realm from '../../config/models';
import { _fetchSessions } from '../../redux/modules/sessions';
import { _fetchFaves } from '../../redux/modules/faves';

import Schedule from './Schedule';

class ScheduleContainer extends Component {
  constructor() {
  super();
  realm.addListener('change', () => {
    this.props.fetchSessions();
    this.props.fetchFaves();
  });
}
  static propTypes = {

  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    this.props.fetchSessions();
    this.props.fetchFaves();
  }

  render() {
    if (this.props.isSessionsLoading || this.props.isFavesLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return(
        <Schedule sessions={this.props.dataSource} faves={this.props.favesIds}/>
      );
    }
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
})

function mapStateToProps(state) {
  return {
    dataSource: ds.cloneWithRowsAndSections(
      state.sessions.sessionsData.dataBlob,
      state.sessions.sessionsData.sectionIds,
      state.sessions.sessionsData.rowIds,
    ),
    isSessionsLoading: state.sessions.isLoading,
    isFavesLoading: state.faves.isLoading,
    favesIds: state.faves.favesIds
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchSessions() {
      dispatch(_fetchSessions())
    },
    fetchFaves() {
      dispatch(_fetchFaves())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
