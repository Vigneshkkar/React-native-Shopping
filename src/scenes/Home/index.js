import React, {useState} from 'react';
import {Text} from 'react-native';
import HomeScreen from './HomeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import data from '../../services/mockProductData';

const Home = () => {
  return (
    <SafeAreaView>
      <HomeScreen data={data}></HomeScreen>
    </SafeAreaView>
  );
};

export default Home;
