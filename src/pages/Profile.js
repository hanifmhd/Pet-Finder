import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../configs';

const menu = [
  {
    name: 'Personal Detail',
    icon: 'person-outline',
  },
  {
    name: 'Privay & Security',
    icon: 'lock-closed-outline',
  },
  {
    name: 'Legal',
    icon: 'information-circle-outline',
  },
  {
    name: 'Log Out',
    icon: 'power',
  },
];

const Profile = ({navigation}) => {
  const Logout = () => {
    AsyncStorage.removeItem(R.strings.LOGIN_DATA);
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
    navigation.dispatch(resetAction);
  };
  return (
    <View style={styles.container}>
      <View style={{padding: RFValue(20)}}>
        <Image
          source={R.images.luka_doncic}
          style={{
            width: RFValue(120),
            height: RFValue(120),
            alignSelf: 'center',
            borderRadius: RFValue(240),
            marginTop: RFValue(80),
            marginBottom: RFValue(10),
          }}
        />
        <View style={{alignItems: 'center', marginBottom: RFValue(20)}}>
          <Text
            style={{
              fontFamily: R.fonts.NunitoBold,
              fontSize: R.sizes.txtHeading1,
            }}>
            Luka Doncic
          </Text>
          <Text
            style={{
              fontFamily: R.fonts.NunitoSemiBold,
              fontSize: R.sizes.txtBody,
            }}>
            +62 821 1456 4652
          </Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={menu}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => (index === 3 ? Logout() : null)}>
              {index === 2 ? null : (
                <View
                  style={{
                    height: 1.5,
                    backgroundColor: R.colors.baseGreyLight,
                    marginBottom: RFValue(20),
                  }}
                />
              )}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: RFValue(20),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor:
                        index === 3 ? R.colors.baseRedLight : '#d2e5fc',
                      padding: RFValue(10),
                      alignItems: 'center',
                      marginRight: RFValue(14),
                      borderRadius: RFValue(20),
                    }}>
                    <Icon
                      name={item.icon}
                      size={RFValue(14)}
                      color={
                        index === 3 ? R.colors.baseRed : R.colors.baseGreyDark
                      }
                      style={{opacity: 0.5}}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: R.fonts.NunitoSemiBold,
                      fontSize: R.sizes.txtBody,
                      color: index === 3 ? R.colors.baseRed : undefined,
                    }}>
                    {item.name}
                  </Text>
                </View>
                <Icon
                  name={'chevron-forward-outline'}
                  size={RFValue(20)}
                  color={R.colors.baseGrey}
                />
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{padding: RFValue(10)}}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseWhite,
  },
});
