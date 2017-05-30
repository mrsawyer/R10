import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator
} from 'react-native';

import About from './About';

class AboutContainer extends Component {

  static propTypes = {

  }
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  componentDidMount() {
    // let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    // fetch(endpoint)
    //   // if fetch is successful, read our JSON out of the response
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     this.setState({ dataSource: result });
    // })
    // .catch(error => console.log(`Error fetching JSON: ${error}`));
  }

  componentDidUpdate() {
    if ( this.state.dataSource && this.state.isLoading ) {
      this.setState({ isLoading: false, });
    }
  }
  render() {
    if (this.state.isLoading) {
      console.log(this.state.dataSource);
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <About data={ this.state.dataSource } />
      );
    }
  }
}

export default AboutContainer;
