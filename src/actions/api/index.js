import redux from '../redux';
import rest from '../rest';

const api = {
  getListBreed: () => {
    return async (dispatch) => {
      dispatch({type: redux.FETCH_LIST_BREED});
      try {
        const response = await fetch(encodeURI(`${rest.getListBreed}`), {
          credentials: 'include',
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        const resConvert = await response.json();
        dispatch({
          type: redux.RECEIVE_LIST_BREED,
          payload: resConvert,
        });
        return Promise.resolve(resConvert);
      } catch (error) {
        dispatch({
          type: redux.API_ERROR,
          payload: error,
        });
        return Promise.resolve(resConvert);
      }
    };
  },
};

export default api;
