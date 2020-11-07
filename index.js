/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import React from 'react';
import {AppRegistry, StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {environment, name as appName} from './app.json';
import reducers from './src/actions/reducers';
import R from './src/configs';
import Router from './src/routes';

let middleware;

if (environment === 'development') {
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}

const store = createStore(reducers, compose(middleware));

const AppContainer = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: R.colors.baseWhite}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={R.colors.baseWhite}
        />
        <Router />
      </View>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
