//figure out how to name actions and set up the corresponding reducer
//import into reducer to

import { firebaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelpers';


//ACTIONS

const GET_SESSIONS_LOADING = 'GET_SESSIONS_LOADING';
const GET_SESSIONS_ERROR = 'GET_SESSIONS_ERROR';
const GET_SESSIONS = 'GET_SESSIONS';

//ACTION CREATORS

const getSessionsLoading = () => ({ type: GET_SESSIONS_LOADING });
const getSessionsError = (error) => ({ type: GET_SESSIONS_ERROR, payload: error});
const getSessions = (sessions) => ({ type: GET_SESSIONS, payload: sessions });

export const _fetchSessions = () => (dispatch) => {
  dispatch(getSessionsLoading());

  return fetch(`${firebaseUrl}/sessions.json`)
          .then(response => response.json())
          .then(sessions => dispatch(getSessions(sessions)))
          .catch(error => dispatch(getSessionsError(error)))
};

//REDUCER

export default function reducer(state = {
  isLoading: false,
  error: '',
  sessionsData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  }
}, action) {
  switch(action.type) {
    case GET_SESSIONS_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_SESSIONS_ERROR: {
      return object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_SESSIONS: {
      let sessions = formatSessionData(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        sessionsData: sessions
      })
    }
    default: {
      return state;
    }
  }
};
