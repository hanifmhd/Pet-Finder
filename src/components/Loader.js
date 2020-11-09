import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';

const Loader = ({isVisible, title}) => {
  return (
    <Modal transparent={true} animationType={'none'} visible={isVisible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            color={R.colors.basePrimary}
            animating={isVisible}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: R.colors.baseWhite,
    padding: RFValue(20),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: RFValue(10),
    fontFamily: R.fonts.NunitoRegular,
    fontSize: R.sizes.txtBody,
  },
});

export default Loader;
