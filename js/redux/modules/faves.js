import { firebaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelpers';
import { queryFaves } from '../../config/models';

const GET_FAVES_LOADING = 'GET_FAVES_LOADING';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';
const GET_FAVES = 'GET_FAVES';

//ACTION CREATORS

const getFavesLoading = () => ({ type: GET_FAVES_LOADING });
const getFavesError = (error) => ({ type: GET_FAVES_ERROR, payload: error});
const getFaves = (faves) => ({ type: GET_FAVES, payload: faves });

const favesArray = queryFaves();

export const _fetchFaves = () => (dispatch) => {
  dispatch(getFavesLoading());

  return fetch(`${firebaseUrl}/sessions.json`)
          .then(response => response.json())
          .then(sessions => dispatch(getFaves(sessions.filter(session => favesArray.includes(session.session_id)))))
          .catch(error => dispatch(getFavesError(error)))
}

export default function reducer(state = {
  isLoading: false,
  error: '',
  favesData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  }
}, action) {
  switch(action.type) {
    case GET_FAVES_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      })
    }
    case GET_FAVES_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    }
    case GET_FAVES: {
      let faves = formatSessionData(action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        favesData: faves
      })
    }
    default: {
      return state;
    }
  }
}
