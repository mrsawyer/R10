import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { colors } from '../../config/styles';

import { createFave } from '../../config/models';
import { deleteFave } from '../../config/models';
import { goToSpeaker } from '../../lib/navigationHelpers';

const Session = ({session, speaker, faves}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}> {session.location}
        {faves.includes(session.session_id) &&
          <Icon
            name={
              Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'
            }
            size={18}
            color={colors.red}
            style={styles.icon}
          />
        }
      </Text>
      <Text style={styles.title}> {session.title}</Text>
      <Text style={styles.time}> {moment.unix(session.start_time).format('h:mm A')}</Text>
      <Text style={styles.paragraph}> {session.description}</Text>
      { speaker &&
        <View style={styles.speaker}>
          <Text style={styles.present}> Presented By: </Text>
            <TouchableHighlight
              onPress={() => goToSpeaker(speaker)}
              underlayColor="#999999"
              style={styles.speaker}
              >
              <Text style={styles.name}>
                <Image source={{uri: speaker.image}} style={styles.speakerimage}/>
                {speaker.name}
              </Text>
            </TouchableHighlight>
        </View>
      }
      {faves.includes(session.session_id) ? (
      <TouchableOpacity
        onPress={() => deleteFave(session.session_id)}
        style={styles.button}
      >
        <LinearGradient
          start={{x: 0.0, y: 0.5}} end={{x: 0.5, y: 1.0}}
          locations={[0,0.8]}
          colors={[colors.purple, colors.blue]}
          style={styles.linearGradient}
        >
          <Text style={styles.faves}>Remove From Faves</Text>
        </LinearGradient>
      </TouchableOpacity>
      ) : (
      <TouchableOpacity
        onPress={() => createFave(session.session_id)}
        style={styles.button}
      >
        <LinearGradient
          start={{x: 0.0, y: 0.5}} end={{x: 0.5, y: 1.0}}
          locations={[0,0.8]}
          colors={[colors.purple, colors.blue]}
          style={styles.linearGradient}
        >
          <Text style={styles.faves}>Add to Faves</Text>
        </LinearGradient>
      </TouchableOpacity>
      )}
    </View>
  );
}

Session.propTypes = {
  session: PropTypes.arr,
  speaker: PropTypes.arr,
  faves: PropTypes.faves,
};

export default Session;
