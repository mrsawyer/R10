import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  ListView
} from 'react-native';
import { connect } from 'react-redux';

import Faves from './Faves';

class FavesContainer extends Component {
  static propTypes = {

  }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    if (this.props.isFavesLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      console.log(this.props.dataSource)
      return(
        <Faves sessions={this.props.dataSource} faves={this.props.favesIds}/>
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
    isFavesLoading: state.faves.isLoading,
    favesIds: state.faves.favesIds
  };
}

export default connect(mapStateToProps)(FavesContainer);
