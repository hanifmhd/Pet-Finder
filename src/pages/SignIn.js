/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';

const {width, height} = Dimensions.get('screen');

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const checkValidation = () => {
    if (username !== 'user') {
      setErrUsername(true);
    }
    if (password !== 'user') {
      setErrPassword(true);
    } else if (!errUsername && !errPassword) {
      AsyncStorage.setItem(
        R.strings.LOGIN_DATA,
        JSON.stringify({username: username}),
      );
      navigation.navigate('HomeStack');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Image
        source={R.images.background_dog}
        resizeMethod="auto"
        resizeMode="cover"
        style={styles.logo}
      />
      <KeyboardAvoidingView
        style={[styles.container, styles.keyboard]}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        enabled>
        <ScrollView contentContainerStyle={styles.containerScrollview}>
          <View style={[styles.container, styles.containerSignIn]}>
            <View style={[styles.containerSignIn, styles.containerLogo]}>
              <View style={[styles.containerSignIn, styles.containerImage]}>
                <Image source={R.images.logo} style={styles.image} />
              </View>
            </View>
            <Input
              textContentType="username"
              keyboardType="default"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.containerInputUsername}
              placeholderTextColor="#4F4F4F"
              placeholder="Username"
              autoCapitalize="none"
              errorStyle={{color: 'red'}}
              errorMessage={errUsername ? `Username is 'user'` : undefined}
              onChangeText={(text) => {
                setUsername(text);
                if (text.length !== 4) {
                  setErrUsername(true);
                } else {
                  setErrUsername(false);
                }
              }}
            />
            <Input
              secureTextEntry={passwordType === 'password' ? true : false}
              textContentType={passwordType}
              keyboardType="default"
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.containerInputPassword}
              placeholderTextColor="#4F4F4F"
              placeholder="Password"
              autoCapitalize="none"
              errorStyle={{color: 'red'}}
              errorMessage={errPassword ? `Password is 'user'` : undefined}
              onChangeText={(text) => {
                setPassword(text);
                if (text.length === 0) {
                  setErrPassword(true);
                } else {
                  setErrPassword(false);
                }
              }}
              onSubmitEditing={() => checkValidation()}
              rightIconContainerStyle={{marginRight: RFValue(10)}}
              rightIcon={
                <Icon
                  name={`eye-${
                    passwordType === 'password' ? 'outline' : 'off-outline'
                  }`}
                  size={RFValue(16)}
                  color={R.colors.basePrimary}
                  containerStyle={{
                    position: 'absolute',
                    right: RFValue(24),
                  }}
                  onPress={() =>
                    setPasswordType(
                      passwordType === 'password' ? 'none' : 'password',
                    )
                  }
                />
              }
            />
            <TouchableOpacity
              style={[styles.containerSignIn, styles.containerLoginButton]}
              onPress={() => checkValidation()}>
              <Text style={styles.loginButtonStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {flex: 1},
  logo: {position: 'absolute', width: width, height: height},
  keyboard: {justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.6)'},
  containerScrollview: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: RFValue(16),
  },
  containerSignIn: {justifyContent: 'center', alignItems: 'center'},
  containerLogo: {
    width: RFValue(128),
    height: RFValue(128),
    borderRadius: RFValue(128),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 64,
  },
  containerImage: {
    width: RFValue(108),
    height: RFValue(108),
    borderRadius: RFValue(108),
    backgroundColor: 'white',
  },
  image: {width: RFValue(52), height: RFValue(52)},
  loader: {width: RFValue(72), height: RFValue(72)},
  containerInputUsername: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderRadius: RFValue(8),
  },
  containerInputPassword: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderRadius: RFValue(8),
  },
  inputStyle: {
    fontSize: RFValue(12),
    marginHorizontal: RFValue(16),
  },
  containerLoginButton: {
    borderRadius: RFValue(8),
    paddingVertical: RFValue(12),
    marginVertical: RFValue(16),
    width: width - RFValue(48),
    backgroundColor: R.colors.basePrimary,
  },
  loginButtonStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: RFValue(12),
  },
});
