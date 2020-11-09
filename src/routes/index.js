import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeStack} from '../components';
import {
  Detail,
  DetailInfo,
  Empty,
  OnBoarding,
  SignIn,
  Splash,
  Profile,
} from '../pages';

const Stack = createStackNavigator();

const StackScreen = [
  {name: 'HomeStack', component: HomeStack},
  {name: 'Empty', component: Empty},
  {name: 'Detail', component: Detail},
  {name: 'OnBoarding', component: OnBoarding},
  {name: 'SignIn', component: SignIn},
  {name: 'Splash', component: Splash},
  {name: 'DetailInfo', component: DetailInfo},
  {name: 'Profile', component: Profile},
];

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {StackScreen.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
