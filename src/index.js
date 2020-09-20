import 'react-native-gesture-handler';
import React from 'react';
import Login from './scenes/Login';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const NavContainer = () => (
  <>
    {/* <SafeAreaView> */}
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            cardStyle: {backgroundColor: '#E5E5E5'},
          }}
          name="sdsdfd"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
    {/* </SafeAreaView> */}
  </>
);
export default NavContainer;
