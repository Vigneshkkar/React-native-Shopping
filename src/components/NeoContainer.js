import React from 'react';

import {View, StyleSheet} from 'react-native';
const NeoCont = ({children, width, height, borderRadius, containerStyle}) => {
  return (
    <View style={styles.outerShadow}>
      <View styles={styles.innerShadow}>
        <View
          style={{
            ...styles.innerContainer,
            ...styles.innerShadow,
            width: width,
            height: height,
            borderRadius: borderRadius || 5,
            ...containerStyle,
          }}>
          {children}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outerShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowColor: '#ffffff',
  },
  innerShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowColor: '#AEAEC0',
  },
  innerContainer: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F0F0F3',
    // borderRadius: 40,
    margin: 10,
  },
});
export default NeoCont;
