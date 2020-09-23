import React from 'react';
import {Text} from 'react-native';
import LoginScreen from './LoginScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
const Login = (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <LoginScreen {...props}></LoginScreen>
    </SafeAreaView>
  );
};

export default Login;
