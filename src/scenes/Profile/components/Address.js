import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Theme from '../../../styles/theme';

const {font, colors} = Theme;
import NeoCont from '../../../components/NeoContainer';
import globalStyles from '../../../styles/globalStyles';
import {FlatList} from 'react-native-gesture-handler';
import {fullWidth} from '../../../util';
import ModalView from '../../../components/Modal';
import GPS from '../../../assets/images/GPS.svg';
import {useState} from 'react';
import AddressData from '../../../services/mockAddressData';

const addressView = () => {
  const [update, setUpdate] = useState(false);
  return (
    <>
      <View>
        <View style={styles.hearderLayout}>
          <Text style={globalStyles.subTitle}>Delivery Address</Text>
          <TouchableOpacity onPress={() => setUpdate(true)}>
            <NeoCont borderRadius={50} containerStyle={{margin: 0}}>
              <Text style={globalStyles.buttonText}>Update</Text>
            </NeoCont>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{padding: 5}}
          data={AddressData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index, separators}) => (
            <TouchableOpacity>
              <NeoCont width={fullWidth - 80}>
                <Text style={styles.addressContent}>
                  {item.title}: {'\n'}
                  {item.doornum}, {item.apartmentDetails},{' '}
                  {item.apartmentStreetName}, {item.area}, {item.city},{' '}
                  {item.pinCode}
                </Text>
              </NeoCont>
            </TouchableOpacity>
          )}
        />
      </View>
      <ModalView visible={update} onClose={() => setUpdate(false)}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={globalStyles.subTitle}>Update Address</Text>
          <NeoCont>
            <TextInput
              style={styles.inputFields}
              placeholder="Address Type eg:Home / Office / Work"></TextInput>
          </NeoCont>
          <NeoCont>
            <TextInput
              style={styles.inputFields}
              placeholder="House / Flat Number"></TextInput>
          </NeoCont>
          <NeoCont>
            <TextInput
              style={styles.inputFields}
              placeholder="Apartment / Area Name"></TextInput>
          </NeoCont>
          <NeoCont>
            <TextInput
              style={styles.inputFields}
              placeholder="Street / Road Name"></TextInput>
          </NeoCont>
          <NeoCont>
            <TextInput
              style={styles.inputFields}
              placeholder="City"></TextInput>
          </NeoCont>
          <NeoCont>
            <TextInput
              style={styles.inputFields}
              placeholder="State"></TextInput>
          </NeoCont>
          <NeoCont>
            <TextInput
              style={styles.inputFields}
              placeholder="Pincode/ Zipcode"></TextInput>
          </NeoCont>
          <NeoCont
            borderRadius={50}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{...globalStyles.buttonText, marginHorizontal: 10}}>
              Use GPS
            </Text>
            <GPS></GPS>
          </NeoCont>
          <View
            style={{
              ...globalStyles.modalBottomContainer,
              paddingHorizontal: 0,
            }}>
            <TouchableOpacity
              onPress={() => setUpdate(false)}
              style={{
                ...globalStyles.modalRightButton,
                ...globalStyles.closeButton,
              }}>
              <Text
                style={{
                  ...globalStyles.subTitle,
                  ...globalStyles.modalRightText,
                }}>
                Close
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setUpdate(false)}
              style={globalStyles.modalRightButton}>
              <Text
                style={{
                  ...globalStyles.subTitle,
                  ...globalStyles.modalRightText,
                }}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalView>
    </>
  );
};

const styles = StyleSheet.create({
  hearderLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressContent: {
    fontFamily: font.medium,
    fontSize: 20,
    color: colors.tertiary,
  },
  inputFields: {...globalStyles.input, width: fullWidth - 100},
});
export default addressView;
