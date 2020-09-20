import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Back from '../../assets/images/Login.svg';
import Illustrator from '../../assets/images/Login_illustrator.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {Neomorph} from 'react-native-neomorph-shadows';

import NeoCont from '../../components/NeoContainer';
const Login = () => {
  return (
    <>
      <Back style={styles.BackDrop}></Back>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.appTitle}>FRESHKART</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginEnd: 10,
          }}>
          <Illustrator />
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'absolute',
            bottom: 10,
            width: '100%',
            height: '40%',
          }}>
          <NeoCont>
            <TextInput style={styles.input} placeholder="Username"></TextInput>
          </NeoCont>
          <NeoCont>
            <TextInput
              style={styles.input}
              placeholder="Passsword"
              textContentType="password"></TextInput>
          </NeoCont>
          <NeoCont borderRadius={40}>
            <TouchableHighlight>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableHighlight>
          </NeoCont>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  BackDrop: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    position: 'absolute',
  },
  appTitle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    fontSize: 48,
    color: '#F0F0F3',
    fontFamily: 'BalooThambi2-Bold',
    fontWeight: 'bold',
  },
  input: {
    width: 240,
    fontFamily: 'BalooThambi2-Regular',
    // marginBottom: 0,
    // color: '#ea728cd',
  },
  loginButton: {
    fontFamily: 'BalooThambi2-Regular',
    fontSize: 24,
    width: 100,
    textAlign: 'center',
  },
});

export default Login;
