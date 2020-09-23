import 'react-native-gesture-handler';
import React from 'react';
import Login from './scenes/Login';
import Home from './scenes/Home';
import Profile from './scenes/Profile';
import Cart from './scenes/Cart';
import BottomTab from './components/BottomTabBar';
import defaultTheme from './styles/theme';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from './assets/images/Home.svg';
import ProfileIcon from './assets/images/Profile.svg';
import CartIcon from './assets/images/Cart.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Appcontainer = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props}></BottomTab>}>
      <Tab.Screen
        options={{
          tabBarIcon: <HomeIcon></HomeIcon>,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: <ProfileIcon></ProfileIcon>,
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: <CartIcon></CartIcon>,
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
};
const NavContainer = () => (
  <>
    {/* <SafeAreaView> */}
    <NavigationContainer initialRouteName="Login" theme={defaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="App"
          component={Appcontainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
    {/* </SafeAreaView> */}
  </>
);
export default NavContainer;
