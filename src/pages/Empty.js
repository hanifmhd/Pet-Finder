import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {EmptyState} from '../components';
import R from '../configs';

const Empty = () => {
  return (
    <View style={styles.container}>
      <EmptyState
        title={'Coming soon'}
        subtitle={'We are preparing something new'}
        soon
      />
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseWhite,
  },
});
