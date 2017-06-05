import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

class CodeConduct extends Component {

  constructor() {
    super();

    this.state ={
      expanded: false,
      rotate: new Animated.Value(0),
      open: 0,
    }
  }

  static propTypes = {
    item: PropTypes.object,
    i: PropTypes.object
  }

  expand = () => {
    if(this.state.expanded){
      LayoutAnimation.easeInEaseOut();
      this.setState({
        expanded: false,
        open: 0
      });
      Animated.timing(
        this.state.rotate,
        { toValue: 0, duration: 300 }
      ).start();
    }else{
      Animated.timing(
        this.state.rotate,
        { toValue: 1, duration: 300 }
      ).start();
      LayoutAnimation.easeInEaseOut();
      this.setState({
        expanded: true,
        open: 'auto'
      });
    }
  }

  render() {

    let spin = this.state.rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    let animatedStyles = {
      transform: [
        {rotate: spin}
      ]
    }

    let conductStyles = {
      height: this.state.open
    }

    return (
      <View key={this.props.i+Date.now()}>
        <TouchableOpacity
          onPress= {this.expand}
          style={styles.conduct}>
          <Animated.Text style={[ styles.sign, animatedStyles ]}>{this.state.expanded ? '-' : '+'}</Animated.Text>
          <Text style={styles.codetitle}>{this.props.item.title}</Text>
        </TouchableOpacity>
        <View style={[ conductStyles ]}>
          {this.state.expanded &&
            <Text style={[ styles.paragraph, conductStyles ]}> {this.props.item.description}</Text>
          }
        </View>
      </View>
    );
  }
}

export default CodeConduct;
