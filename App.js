/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src';
import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    <SafeAreaProvider style={styles.theme}>
      {/* // <SafeAreaView> */}
      {/* <View> */}
      <Navigation></Navigation>
      {/* //   </SafeAreaView> */}
      {/* </View> */}
    </SafeAreaProvider>
    // </>
  );
};

const styles = StyleSheet.create({
  theme: {
    fontFamily: 'BalooThambi2-Regular',
  },
});
export default App;
