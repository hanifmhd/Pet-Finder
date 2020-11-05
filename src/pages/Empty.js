import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import R from '../configs';

const Empty = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={R.colors.baseWhite}
      />
      <Text>Empty</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
