import React from 'react';
import {Text} from 'react-native';
import ProfileScreen from './ProfileScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
const Profile = () => {
  return (
    <SafeAreaView>
      <ProfileScreen></ProfileScreen>
    </SafeAreaView>
  );
};

export default Profile;
