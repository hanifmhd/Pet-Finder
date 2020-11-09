import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  Platform,
  ToastAndroid,
  View,
} from 'react-native';
import {
  BottomTabBarWrapper,
  MultiBarButton,
  MultiBarProvider,
} from 'react-native-multibar';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../configs';
import {Empty, Home, Profile} from '../pages';

const Tab = createBottomTabNavigator();
let backPressed = 0;

const HomeStack = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  const backAction = () => {
    if (!navigation.isFocused()) {
      // The screen is not focused, so don't do anything
      backPressed = 0;
      return false;
    }

    if (backPressed <= 0) {
      ToastAndroid.show('Press back again to close app', ToastAndroid.SHORT);
      backPressed = backPressed + 1;
    } else {
      BackHandler.exitApp();
    }
    return true;
  };

  return (
    <MultiBarProvider
      overlayProps={{
        expandingMode: 'staging',
      }}
      data={[
        ({navigation}) => (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: R.colors.basePrimary,
              borderRadius: RFValue(40),
              padding: RFValue(2),
            }}>
            <Icon
              name={'close-outline'}
              color={R.colors.baseWhite}
              size={RFValue(20)}
              style={{marginLeft: Platform.OS === 'android' ? 0 : RFValue(2)}}
              onPress={() => Alert.alert('Coming soon!')}
            />
          </View>
        ),
        ({navigation}) => (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: R.colors.basePrimary,
              borderRadius: RFValue(40),
              padding: RFValue(2),
            }}>
            <Icon
              name={'ellipse-outline'}
              color={R.colors.baseWhite}
              size={RFValue(20)}
              style={{marginLeft: Platform.OS === 'android' ? 0 : RFValue(2)}}
              onPress={() => Alert.alert('Coming soon!')}
            />
          </View>
        ),
        ({navigation}) => (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: R.colors.basePrimary,
              borderRadius: RFValue(40),
              padding: RFValue(2),
            }}>
            <Icon
              name={'triangle-outline'}
              color={R.colors.baseWhite}
              size={RFValue(20)}
              style={{marginLeft: Platform.OS === 'android' ? 0 : RFValue(2)}}
              onPress={() => Alert.alert('Coming soon!')}
            />
          </View>
        ),
        ({navigation}) => (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: R.colors.basePrimary,
              borderRadius: RFValue(40),
              padding: RFValue(2),
            }}>
            <Icon
              name={'square-outline'}
              color={R.colors.baseWhite}
              size={RFValue(20)}
              style={{marginLeft: Platform.OS === 'android' ? 0 : RFValue(2)}}
              onPress={() => Alert.alert('Coming soon!')}
            />
          </View>
        ),
      ]}
      iconSize={40}
      overlayRadius={100}
      initialExtrasVisible={false}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => (
          <BottomTabBarWrapper params={props.navigation}>
            <BottomTabBar {...props} />
          </BottomTabBarWrapper>
        )}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={R.images.home}
                  style={{
                    width: RFValue(24),
                    height: RFValue(24),
                    marginTop: RFValue(10),
                    tintColor: focused ? undefined : R.colors.baseGrey,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Empty}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={R.images.chat}
                  style={{
                    width: RFValue(24),
                    height: RFValue(24),
                    marginTop: RFValue(10),
                    tintColor: focused ? undefined : R.colors.baseGrey,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Add"
          component={Empty}
          options={{
            tabBarLabel: '',
            tabBarButton: () => (
              <MultiBarButton
                style={{
                  backgroundColor: R.colors.basePrimary,
                }}>
                <Image
                  source={R.images.plus}
                  style={{
                    width: RFValue(24),
                    height: RFValue(24),
                  }}
                />
              </MultiBarButton>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Empty}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={R.images.search}
                  style={{
                    width: RFValue(24),
                    height: RFValue(24),
                    marginTop: RFValue(10),
                    tintColor: focused ? undefined : R.colors.baseGrey,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Image
                  source={R.images.profile}
                  style={{
                    width: RFValue(24),
                    height: RFValue(24),
                    marginTop: RFValue(10),
                    tintColor: focused ? undefined : R.colors.baseGrey,
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </MultiBarProvider>
  );
};

export default HomeStack;
