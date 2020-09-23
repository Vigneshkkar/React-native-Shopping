import React from 'react';
import {Text} from 'react-native';
import HomeScreen from './HomeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
const Home = () => {
  return (
    <SafeAreaView>
      <HomeScreen></HomeScreen>
    </SafeAreaView>
  );
};

export default Home;
