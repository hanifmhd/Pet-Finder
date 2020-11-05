'use strict';

import redux from '../redux';

const initialState = {
  fetching: false,
  error: false,
  status: false,
};

const reducers = (state = initialState, action) => {
  if (action.type === redux.API_ERROR) {
    return {
      ...state,
      fetching: false,
      error: true,
    };
  } else if (action.type.includes('FETCH')) {
    return {
      ...state,
      fetching: true,
      error: false,
    };
  } else if (action.type.includes('RECEIVE')) {
    return {
      ...state,
      fetching: false,
      error: false,
      [action.type]: action.payload,
    };
  } else {
    return state;
  }
};

export default reducers;
