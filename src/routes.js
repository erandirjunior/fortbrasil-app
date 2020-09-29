import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Stores from '~/pages/Stores';

const stackRoutes = [
  { name: 'SignIn', component: SignIn },
  { name: 'SignUp', component: SignUp },
];

const tabRoutes = [
  { name: ' ', component: Stores }
];

const globalOptionsTab = {
  unmountOnBlur: true,
  keyboardHidesTabBar: true,
  style: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2e14ff" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" headerMode="none">
          {tabRoutes.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export function SignRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2e14ff" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" headerMode="none">
          {stackRoutes.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
