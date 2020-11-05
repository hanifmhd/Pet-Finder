/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import fonts from '../configs/fonts';
import sizes from '../configs/sizes';
import HomeStack from '../components/HomeStack';
import Home from '../pages/Home';
import Empty from '../pages/Empty';

const Stack = createStackNavigator();

const StackScreen = [
  {
    name: 'HomeStack',
    component: HomeStack,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Empty',
    component: Empty,
  },
];

function Router() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeStack">
          {StackScreen.map((item, index) => {
            return (
              <Stack.Screen
                key={index}
                name={item.name}
                component={item.component}
                options={({navigation, route}) => ({
                  headerBackTitleVisible: false,
                  headerShown: false,
                  headerTitleAlign: 'center',
                })}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Router;

const styles = StyleSheet.create({
  containerHeaderTitle: {marginLeft: RFValue(-8)},
  headerTitle: {
    fontSize: sizes.txtParagraph,
    fontWeight: 'bold',
    color: colors.baseWhite,
  },
  headerTitleLine2: {
    fontSize: sizes.txtBody,
    color: colors.baseWhite,
  },
  headerRight: {
    marginRight: RFValue(16),
    width: RFValue(12),
    height: RFValue(12),
  },
});
