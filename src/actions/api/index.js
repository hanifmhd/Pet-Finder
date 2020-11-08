import redux from '../redux';
import rest from '../rest';

const api = {
  getListAllBreeds: () => {
    return async (dispatch) => {
      dispatch({type: redux.FETCH_LIST_BREED});
      try {
        const response = await fetch(encodeURI(`${rest}/breeds/list/all`), {
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
  getListSubBreed: (parent) => {
    return async (dispatch) => {
      dispatch({type: redux.FETCH_LIST_SUB_BREED});
      try {
        const response = await fetch(
          encodeURI(`${rest}/breed/${parent}/list`),
          {
            credentials: 'include',
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        const resConvert = await response.json();
        dispatch({
          type: redux.RECEIVE_LIST_SUB_BREED,
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
  getImageBreed: (parent, sub) => {
    return async (dispatch) => {
      dispatch({type: redux.FETCH_IMAGE_BREED});
      try {
        const response = await fetch(
          encodeURI(`${rest}/breed/${parent}/${sub}/images/random`),
          {
            credentials: 'include',
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        const resConvert = await response.json();
        dispatch({
          type: redux.RECEIVE_IMAGE_BREED,
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
  getImageSubBreed: (parent, sub) => {
    return async (dispatch) => {
      dispatch({type: redux.FETCH_IMAGE_SUB_BREED});
      try {
        const response = await fetch(
          encodeURI(`${rest}/breed/${parent}/${sub}/images`),
          {
            credentials: 'include',
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        const resConvert = await response.json();
        dispatch({
          type: redux.RECEIVE_IMAGE_SUB_BREED,
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
