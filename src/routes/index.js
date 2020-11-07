import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Alert, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  BottomTabBarWrapper,
  MultiBarButton,
  MultiBarProvider,
} from 'react-native-multibar';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';
import {Home, Empty} from '../pages';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <MultiBarProvider
        overlayProps={{
          expandingMode: 'staging',
        }}
        data={[
          ({navigation}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: R.colors.basePrimary,
                borderRadius: RFValue(48),
              }}>
              <Icon
                name={'add-circle-outline'}
                color={R.colors.baseWhite}
                size={RFValue(24)}
                onPress={() => Alert.alert('Coming soon!')}
              />
            </View>
          ),
          ({navigation}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: R.colors.basePrimary,
              }}>
              <Icon
                name={'add-outline'}
                color={R.colors.baseWhite}
                size={RFValue(24)}
                onPress={() => Alert.alert('Coming soon!')}
              />
            </View>
          ),
          ({navigation}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: R.colors.basePrimary,
              }}>
              <Icon
                name={'add-outline'}
                color={R.colors.baseWhite}
                size={RFValue(24)}
                onPress={() => Alert.alert('Coming soon!')}
              />
            </View>
          ),
          ({navigation}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: R.colors.basePrimary,
              }}>
              <Icon
                name={'add-outline'}
                color={R.colors.baseWhite}
                size={RFValue(24)}
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
            component={Empty}
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
    </NavigationContainer>
  );
}
