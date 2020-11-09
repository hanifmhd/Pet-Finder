import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import R from '../configs';

const {width, height} = Dimensions.get('screen');
const EmptyState = ({title, subtitle, soon}) => {
  return (
    <View style={styles.container}>
      <Image
        source={soon ? R.images.coming_soon : R.images.empty}
        resizeMode={'contain'}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    height: width * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: width * 0.5,
  },
  textContainer: {
    marginVertical: RFValue(10),
    maxWidth: width * 0.85,
  },
  title: {
    fontFamily: R.fonts.NunitoBold,
    fontSize: R.sizes.txtHeading3,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: R.fonts.NunitoRegular,
    fontSize: R.sizes.txtBody,
    textAlign: 'center',
    color: R.colors.baseGreyDark,
  },
});
