import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { _fetchConduct } from '../../redux/modules/conduct';

import About from './About';

class AboutContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  componentDidMount() {
    this.props.fetchConduct();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <About conductData={ this.props.conduct } />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    conduct: state.conduct.conductData,
    isLoading: state.conduct.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchConduct() {
      dispatch(_fetchConduct())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
