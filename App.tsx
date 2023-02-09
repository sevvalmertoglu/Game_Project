import React, { Component } from 'react';
import  LoginForm  from './screens/LoginForm';
import Signup from './screens/SignupScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='loginform'>
      <Stack.Screen name='loginform' component={LoginForm} options={{headerShown: false}} />
      <Stack.Screen name='signup' component={Signup} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
