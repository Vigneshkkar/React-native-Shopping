import React from 'react';
import {Text, View} from 'react-native';

import Theme from '../../styles/theme';
import globalStyles from '../../styles/globalStyles';

import UserDetails from './components/userDetails';
import Address from './components/Address';
import Orders from './components/Orders';

const {font, colors} = Theme;
const ProfileScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Profile</Text>
      <UserDetails></UserDetails>
      <Address></Address>
      <Orders></Orders>
    </View>
  );
};

export default ProfileScreen;
