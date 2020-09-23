import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, FlatList, Modal} from 'react-native';
import Theme from '../../styles/theme';
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
    <View style={Styles.container}>
      <Text style={Styles.title}>Home</Text>
      <NeoCont>
        <View style={Styles.searchCont}>
          <Search style={Styles.searchIcon}></Search>
          <TextInput style={Styles.searchBar} placeholder="Search"></TextInput>
        </View>
      </NeoCont>

      <FlatList
        style={{marginBottom: 205, paddingTop: 5}}
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    // flex: 1,
    marginHorizontal: 15,
  },
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
  title: {
    fontFamily: font.bold,
    fontSize: 36,
    color: colors.primary,
  },
});

export default Home;
