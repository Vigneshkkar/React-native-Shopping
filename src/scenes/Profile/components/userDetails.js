import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles';
import Theme from '../../../styles/theme';

const {font, colors} = Theme;
import NeoCont from '../../../components/NeoContainer';

const userDetails = () => {
  return (
    <View style={styles.userContainer}>
      <NeoCont
        borderRadius={50}
        width={100}
        height={100}
        containerStyle={styles.neoContainer}>
        <Text style={{...styles.Initials}}>V</Text>
      </NeoCont>
      <View style={styles.detailsCont}>
        <Text style={{...globalStyles.title, fontSize: 30}}>Vaidhehi</Text>
        <Text style={styles.phoneNum}>+91 8056988976</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
  },
  detailsCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  Initials: {
    fontFamily: 'Akronim-Regular',
    fontSize: 76,
    color: colors.secondary,
    paddingTop: 10,
  },
  neoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNum: {
    color: colors.secondary,
    fontFamily: font.bold,
    fontSize: 20,
  },
});

export default userDetails;
