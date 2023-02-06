import React, { Component } from 'react';
import  LoginForm  from './LoginForm';
import Signup from './screens/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loginform'>
      <Stack.Screen name='loginform' component={LoginForm} />
      <Stack.Screen name='signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
