import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

import Lieux from '../screens/Lieux';
import LieuxDetails from '../screens/LieuxDetails';

import Restos from '../screens/Restos';
import RestosDetails from '../screens/RestosDetails';

import React from 'react';
import Splash from '../screens/Spalsh';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Lieux" component={Lieux} />
      <Stack.Screen name="LieuxDetails" component={LieuxDetails} />

      <Stack.Screen name="Restos" component={Restos} />
      <Stack.Screen name="RestosDetails" component={RestosDetails} />

      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />


    </Stack.Navigator>
  )
}
export default MyStack








