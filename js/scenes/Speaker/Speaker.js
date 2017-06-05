import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../config/styles';

import { styles } from './styles';

class Speaker extends Component {

  handleClick = () => {

    Linking.canOpenURL(this.props.speaker.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.speaker.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.speaker.url);
      }
    });
  };
  render() {
    return (
      <View style={styles.body}>
        <ScrollView style={styles.container}>
          <Image source={{uri: this.props.speaker.image}} style={styles.speakerimage}/>
          <Text style={styles.name}> {this.props.speaker.name}</Text>
          <Text style={styles.bio}> {this.props.speaker.bio} </Text>
          <TouchableOpacity
            onPress={this.handleClick(this.props.speaker.url)}
            style={styles.button}
          >
            <LinearGradient
              start={{x: 0.0, y: 0.5}} end={{x: 0.5, y: 1.0}}
              locations={[0,0.8]}
              colors={[colors.purple, colors.blue]}
              style={styles.linearGradient}
            >
              <Text style={styles.readMore}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Speaker;
