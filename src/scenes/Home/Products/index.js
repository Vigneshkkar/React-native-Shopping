import React from 'react';

import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import NeoCont from '../../../components/NeoContainer';
import Theme from '../../../styles/theme';
import {fullWidth} from '../../../util';

const {colors, font} = Theme;
// const fullWidth = Dimensions.get('window').width;
const ProductCard = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width: fullWidth / 2 - 20}}>
      <NeoCont>
        <View style={Styles.cardContainer}>
          {item.image}
          <Text numberOfLines={1} ellipsizeMode="tail" style={Styles.CardTitle}>
            {item.name}
          </Text>
          <View style={Styles.PriceContainer}>
            <Text style={Styles.cardPrice}>
              Rs. {item.price} /{item.unit}
            </Text>
          </View>
        </View>
      </NeoCont>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  PriceContainer: {
    // display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: fullWidth / 2 - 40,
  },
  CardTitle: {
    fontFamily: font.bold,
    fontSize: 22,
    color: colors.primary,
  },
  cardPrice: {
    fontFamily: font.bold,
    fontSize: 16,
    color: colors.secondary,
  },
});

export default ProductCard;
