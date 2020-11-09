/* eslint-disable react/no-string-refs */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {createRef, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../configs';

const header = [
  'What is Pet Finder?',
  'Three Amazing Features',
  'Simple Yet Functional',
];

const content = [
  R.strings.LOREM_IPSUM_SHORT,
  R.strings.LOREM_IPSUM_SHORT,
  R.strings.LOREM_IPSUM_SHORT,
];

const {width, height} = Dimensions.get('screen');

const OnBoarding = ({navigation}) => {
  const swiper = createRef();
  const [indexSwiper, setIndexSwiper] = useState(0);
  const getImage = (param) => {
    switch (param) {
      case 0:
        return R.images.boarding_1;
      case 1:
        return R.images.boarding_2;
      case 2:
        return R.images.boarding_3;
      default:
        return null;
    }
  };

  const renderBoarding = () => {
    return content.map((item, index) => (
      <View key={index} style={[styles.container, styles.containerContent]}>
        <View style={styles.container}>
          <View style={[styles.container, styles.containerImage]}>
            <Image style={styles.imageStyle} source={getImage(index)} />
          </View>
          <View style={[styles.container, styles.containerTitle]}>
            <Text style={styles.titleStyle}>{header[index]}</Text>
            <Text style={styles.descriptionStyle}>{content[index]}</Text>
          </View>
        </View>
      </View>
    ));
  };

  const onIndexChanged = (index) => {
    setIndexSwiper(index);
  };

  const next = () => {
    let nextIndex = indexSwiper + 1;
    setIndexSwiper(nextIndex);
    if (indexSwiper >= 2) {
      AsyncStorage.setItem(R.strings.ONBOARDING_APP, 'OPENED');
      navigation.navigate('SignIn');
    } else {
      swiper.current.scrollBy(nextIndex);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: R.colors.baseWhite}]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={R.colors.baseWhite}
        translucent={true}
      />
      <View style={[styles.container]}>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.setItem(R.strings.ONBOARDING_APP, 'OPENED');
            navigation.navigate('SignIn');
          }}
          style={styles.containerSkip}>
          <Text style={styles.skipStyle}>Skip</Text>
        </TouchableOpacity>
        <Swiper
          ref={swiper}
          onIndexChanged={onIndexChanged}
          dot={<View style={styles.dotSwiper} />}
          activeDot={<View style={styles.activeDotSwiper} />}
          loop={false}
          paginationStyle={styles.pagination}>
          {renderBoarding()}
        </Swiper>
        <TouchableOpacity onPress={() => next()} style={styles.containerNext}>
          <Text style={[styles.skipStyle, styles.nextStyle]}>
            {indexSwiper === 2 ? `Let's Go` : 'Next'}
          </Text>
          <Icon
            name={'chevron-forward-outline'}
            size={RFValue(18)}
            color={R.colors.basePrimary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerSafeAreaView: {justifyContent: 'center', marginTop: 32},
  containerSkip: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    paddingTop: RFValue(40),
    paddingRight: RFValue(20),
  },
  skipStyle: {
    color: R.colors.basePrimary,
    fontWeight: 'bold',
    fontSize: RFValue(14),
  },
  dotSwiper: {
    backgroundColor: 'grey',
    width: 8,
    height: 3,
    borderRadius: 4,
    margin: 3,
  },
  activeDotSwiper: {
    backgroundColor: R.colors.basePrimary,
    width: 30,
    height: 3,
    borderRadius: 4,
    margin: 3,
  },
  pagination: {
    paddingLeft: 25,
    justifyContent: 'flex-start',
    top: height * 0.7,
  },
  containerNext: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: RFValue(20),
    paddingBottom: RFValue(40),
    flexDirection: 'row',
  },
  nextStyle: {fontWeight: 'bold'},
  containerContent: {marginTop: RFValue(-20)},
  containerImage: {
    justifyContent: 'flex-start',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    marginTop: RFValue(100),
  },
  imageStyle: {width: width / 1.5, height: height * 0.3},
  containerTitle: {
    justifyContent: 'flex-start',
    marginTop: RFValue(20),
    padding: RFValue(20),
  },
  titleStyle: {
    color: R.colors.basePrimary,
    fontWeight: 'bold',
    fontSize: RFValue(24),
  },
  descriptionStyle: {
    marginTop: 25,
    color: '#ABABAB',
    fontWeight: 'bold',
    fontSize: RFValue(14),
    textAlign: 'justify',
  },
});
