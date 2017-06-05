//figure out how to name actions and set up the corresponding reducer
//import into reducer to

import { firebaseUrl } from '../../config/api';
import { formatDataObject } from '../../lib/dataFormatHelpers';


//ACTIONS

const GET_SPEAKER_LOADING = 'GET_SPEAKER_LOADING';
const GET_SPEAKER_ERROR = 'GET_SPEAKER_ERROR';
const GET_SPEAKER = 'GET_SPEAKER';

//ACTION CREATORS

const getSpeakerLoading = () => ({ type: GET_SPEAKER_LOADING });
const getSpeakerError = (error) => ({ type: GET_SPEAKER_ERROR, payload: error});
const getSpeaker = (speaker) => ({ type: GET_SPEAKER, payload: speaker });

export const _fetchSpeaker = (speakerId) => (dispatch) => {
  dispatch(getSpeakerLoading());

  return fetch(`${firebaseUrl}/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`)
          .then(response => response.json())
          .then(speakerInfo => dispatch(getSpeaker(speakerInfo)))
          .catch(error => dispatch(getSpeakerError(error)))
};

//REDUCER

export default function reducer(state = {
  isLoading: false,
  error: '',
  speakerData: {}
}, action) {
  switch(action.type) {
    case GET_SPEAKER_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_SPEAKER_ERROR: {
      return object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_SPEAKER: {
      let speaker = formatDataObject(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        speakerData: speaker
      })
    }
    default: {
      return state;
    }
  }
};
