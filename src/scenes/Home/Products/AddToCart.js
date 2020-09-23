import React, {useState, useEffect} from 'react';

import {Text, TouchableHighlight, Modal, View, StyleSheet} from 'react-native';
import {fullWidth, fullHeight} from '../../../util';
import Theme from '../../../styles/theme';
import ModalView from '../../../components/Modal';
import NeoCont from '../../../components/NeoContainer';
import UpArrow from '../../../assets/images/UpArrow.svg';
import DownArrow from '../../../assets/images/DownArrow.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {colors, font} = Theme;
const AddtoCart = (props) => {
  const [CartNumber, setCartNumber] = useState(1);

  useEffect(() => {
    setCartNumber(1);
  }, [props.selectedItem]);
  return (
    <ModalView {...props}>
      {props.selectedItem && (
        <View style={Styles.ModalContainer}>
          <View style={Styles.scaleImage}>{props.selectedItem.image}</View>
          <Text style={Styles.CardTitle}>{props.selectedItem.name}</Text>
          <View style={Styles.descContainer}>
            <Text style={{...Styles.CardTitle, ...Styles.descText}}>
              Description:
            </Text>
            <Text style={{...Styles.CardTitle, ...Styles.descText}}>
              {'    '}
              {props.selectedItem.description}
            </Text>
          </View>
          <View style={Styles.PriceContainer}>
            <Text style={{...Styles.CardTitle, ...Styles.priceColor}}>
              Rs. {props.selectedItem.price} /{props.selectedItem.unit}
            </Text>
            <NeoCont>
              <View style={Styles.Incrementer}>
                <TouchableOpacity onPress={() => setCartNumber(CartNumber + 1)}>
                  <UpArrow />
                </TouchableOpacity>
                <Text style={{...Styles.CardTitle, ...Styles.cartNumberSize}}>
                  {CartNumber}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    setCartNumber(CartNumber > 1 ? CartNumber - 1 : CartNumber)
                  }>
                  <DownArrow />
                </TouchableOpacity>
              </View>
            </NeoCont>
          </View>
          <View style={{...Styles.PriceContainer, paddingHorizontal: 0}}>
            <TouchableOpacity
              onPress={props.onClose}
              style={{...Styles.AddToCartButton, ...Styles.closeButton}}>
              <Text style={{...Styles.CardTitle, ...Styles.AddCartText}}>
                Close
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onClose}
              style={Styles.AddToCartButton}>
              <Text style={{...Styles.CardTitle, ...Styles.AddCartText}}>
                AddtoCart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ModalView>
  );
};

const Styles = StyleSheet.create({
  ModalContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  CardTitle: {
    fontFamily: font.bold,
    fontSize: 30,
    color: colors.primary,
  },
  descContainer: {
    width: fullWidth,
    paddingHorizontal: 25,
    flex: 1,
  },
  descText: {
    fontSize: 14,
  },
  priceColor: {
    color: colors.secondary,
  },
  PriceContainer: {
    width: fullWidth,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cartNumberSize: {
    fontSize: 33,
  },
  Incrementer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scaleImage: {
    margin: 10,
    transform: [
      {
        scale: 1.5,
      },
    ],
  },
  AddToCartButton: {
    backgroundColor: colors.primary,
    width: fullWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  closeButton: {
    backgroundColor: colors.secondary,
  },
  AddCartText: {
    color: colors.background,
    fontSize: 27,
  },
});

export default AddtoCart;
