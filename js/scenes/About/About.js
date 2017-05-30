import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import CodeConduct from '../../components/CodeConduct';

import { styles } from './styles';

const About = ({data}) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/r10_logo.png')}
        style={styles.logoimage}
      />
      <Text style={styles.paragraph}> R10 is a conference that focuses on just about any topic related to dev.</Text>
      <Text style={styles.title}> Date & Venue</Text>
      <Text style={styles.paragraph}> The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
      <Text style={styles.title}> Code of Conduct</Text>
      {data.map((item, i) => (
        <CodeConduct item={item} key={i} />
      ))}
    </ScrollView>
  );
}

export default About;
