import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, FlatList, Modal} from 'react-native';
import Theme from '../../styles/theme';
import globalStyles from '../../styles/globalStyles';
import NeoCont from '../../components/NeoContainer';
import Search from '../../assets/images/Search.svg';
import ProductCard from './Products';
import ModalView from './Products/AddToCart';

import {TouchableHighlight} from 'react-native-gesture-handler';

const {colors, font} = Theme;
const Home = ({data}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
      <NeoCont>
        <View style={Styles.searchCont}>
          <Search style={Styles.searchIcon}></Search>
          <TextInput style={Styles.searchBar} placeholder="Search"></TextInput>
        </View>
      </NeoCont>

      <FlatList
        style={{marginBottom: 105, paddingTop: 5}}
        data={data}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
        contentContainerStyle={Styles.cardLayout}
        numColumns={2}
        renderItem={({item, index, separators}) => (
          <ProductCard
            item={item}
            onPress={() => {
              setModalVisible(true);
              setSelectedItem(item);
            }}
          />
        )}
      />
      <ModalView
        visible={modalVisible}
        selectedItem={selectedItem}
        onClose={() => setModalVisible(false)}></ModalView>
    </View>
  );
};

const Styles = StyleSheet.create({
  cardLayout: {
    // display: 'flex',
    // flex: 2,
    // flexDirection: 'row',
  },

  searchCont: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchIcon: {
    marginEnd: 10,
  },
  searchBar: {
    fontFamily: font.regular,
  },
});

export default Home;
