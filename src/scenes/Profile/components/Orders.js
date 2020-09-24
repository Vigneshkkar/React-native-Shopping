import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NeoCont from '../../../components/NeoContainer';

import mockOrderData from '../../../services/mockOrderData';
import globalStyles from '../../../styles/globalStyles';
import defaultTheme from '../../../styles/theme';
import {fullWidth} from '../../../util';

import OutForDelivery from '../../../assets/images/OutForDelivery.svg';
import Delivered from '../../../assets/images/Delivered.svg';
import OrderPlaced from '../../../assets/images/OrderPlaced.svg';
import UnknownOrder from '../../../assets/images/UnknownOrder.svg';
import ModalView from '../../../components/Modal';
import {useState} from 'react';

const {font, colors} = defaultTheme;

const getStatusText = (statusCode) => {
  let statusText = '';
  switch (statusCode) {
    case 0:
      statusText = 'Order Placed';
      break;
    case 1:
      statusText = 'Out for Delivery';
      break;
    case 2:
      statusText = 'Order Delivered';
      break;
    default:
      statusText = 'Unknow Status';
      break;
  }
  return statusText;
};
const getStatusIcon = (statusCode) => {
  let statusIcon = '';
  switch (statusCode) {
    case 0:
      statusIcon = <OrderPlaced />;
      break;
    case 1:
      statusIcon = <OutForDelivery></OutForDelivery>;
      break;
    case 2:
      statusIcon = <Delivered></Delivered>;
      break;
    default:
      statusIcon = <UnknownOrder></UnknownOrder>;
      break;
  }
  return statusIcon;
};
const Orders = () => {
  const [orderDetails, setOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <View>
      <Text style={globalStyles.subTitle}>My Orders</Text>
      <FlatList
        style={{marginBottom: 550, padding: 5}}
        data={mockOrderData}
        renderItem={({item, index, separators}) => (
          <TouchableOpacity
            onPress={() => {
              setOrderDetails(true);
              setSelectedOrder(item);
            }}>
            <NeoCont>
              <View>
                <View style={styles.orderDetailsCont}>
                  <View>
                    <Text style={styles.orderNum}>#{item.orderNumber}</Text>
                    <Text style={styles.orderDetails}>
                      Status:{getStatusText(item.status)}
                    </Text>
                    <Text style={styles.orderDetails}>
                      Remaining Days: {item.eta}
                    </Text>
                  </View>
                  {getStatusIcon(item.status)}
                </View>
                <Text
                  style={{
                    ...globalStyles.title,
                    fontSize: 16,
                    textAlign: 'center',
                    marginVertical: 10,
                  }}>
                  Click to view details
                </Text>
              </View>
            </NeoCont>
          </TouchableOpacity>
        )}
      />
      <ModalView visible={orderDetails} onClose={() => setOrderDetails(false)}>
        {selectedOrder && (
          <View>
            <Text style={globalStyles.subTitle}>
              #{selectedOrder.orderNumber}
            </Text>
            <View>
              {getStatusIcon(selectedOrder.status)}
              {getStatusIcon(2)}
            </View>
          </View>
        )}
      </ModalView>
    </View>
  );
};

const styles = StyleSheet.create({
  orderNum: {
    fontFamily: font.medium,
    fontSize: 20,
    color: colors.secondary,
  },
  orderDetails: {
    fontFamily: font.medium,
    color: colors.tertiary,
    fontSize: 15,
  },
  orderDetailsCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
export default Orders;
