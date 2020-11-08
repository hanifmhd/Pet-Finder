/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions} from '@react-navigation/compat';
import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {RFValue} from 'react-native-responsive-fontsize';
import {name as appName} from '../../app.json';
import R from '../configs';

const {width, height} = Dimensions.get('screen');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkingAccess();
    }, 1000);
  }, []);

  const checkingAccess = async () => {
    let loginData = await AsyncStorage.getItem(R.strings.LOGIN_DATA);
    if (!loginData) {
      let onBoardingApp = await AsyncStorage.getItem(R.strings.ONBOARDING_APP);
      if (onBoardingApp) {
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        });
        navigation.dispatch(resetAction);
      } else {
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [{name: 'OnBoarding'}],
        });
        navigation.dispatch(resetAction);
      }
    } else {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'HomeStack'}],
      });
      navigation.dispatch(resetAction);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={R.colors.baseWhite}
        translucent={true}
      />
      <Image
        source={R.images.logo}
        style={{width: RFValue(200), height: RFValue(100)}}
        resizeMode="cover"
      />
      <Text style={styles.appName}>{appName}</Text>
      <Text style={[styles.appName, {bottom: -(width - RFValue(144))}]}>
        Version {DeviceInfo.getVersion()}
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: R.colors.baseWhite,
  },
  appName: {
    fontWeight: 'bold',
    fontSize: RFValue(16),
    marginVertical: RFValue(36),
  },
});
