import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import { _fetchFaves } from '../../redux/modules/faves';
import realm from '../../config/models';

import Faves from './Faves';

class FavesContainer extends Component {
  static propTypes = {

  }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  componentDidMount() {
    this.props.fetchFaves();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return(
        <Faves isLoading={this.props.isLoading} faves={this.props.dataSource}/>
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
      state.faves.favesData.dataBlob,
      state.faves.favesData.sectionIds,
      state.faves.favesData.rowIds,
    ),
    isLoading: state.faves.isLoading
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchFaves() {
      dispatch(_fetchFaves())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);
