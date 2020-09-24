import React, {useState} from 'react';

import {Text, TouchableOpacity, Modal, View, StyleSheet} from 'react-native';
import {fullWidth, fullHeight} from '../util';
import Theme from '../styles/theme';

const {colors, font} = Theme;
const ModalView = ({children, visible, onClose, height}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <TouchableOpacity
        onPress={onClose}
        style={Styles.centeredView}></TouchableOpacity>
      <View style={{...Styles.modalView}}>{children}</View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  //modal style
  centeredView: {
    width: fullWidth,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: fullWidth,
    // height: fullHeight / 2,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.background,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalView;
