import React from 'react';
import {Text} from 'react-native';
import CartScreen from './CartScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
const Cart = () => {
  return (
    <SafeAreaView>
      <CartScreen></CartScreen>
    </SafeAreaView>
  );
};

export default Cart;
