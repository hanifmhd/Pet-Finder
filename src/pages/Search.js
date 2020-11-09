import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import api from '../actions/api';
import {EmptyState, Loader} from '../components';
import R from '../configs';

const {width, height} = Dimensions.get('screen');
const Empty = ({navigation}) => {
  const dispatch = useDispatch();
  const loadingRedux = useSelector((state) => state.loading);
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [error, setError] = useState('We cant find any data');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchListBreed();
  }, []);

  const fetchListBreed = async () => {
    await dispatch(api.getListAllImageBreeds())
      .then((result) => {
        setData(result.message);
        setNewData(result.message);
      })
      .catch((e) => {
        setData([]);
        return Alert.alert(e);
      });
  };

  const searchFilter = (searchText) => {
    setSearch(searchText);
    let filteredData = data.filter(function (item) {
      return item.includes(searchText.toLowerCase());
    });
    setNewData(filteredData);
  };

  const navigateToDetail = (item) => {
    let data_split = item
      .split('https://images.dog.ceo/breeds/')
      .pop()
      .split('/')[0];
    let arr_data_split = data_split.split('-');
    if (arr_data_split.length > 1) {
      let object = {
        name: arr_data_split[1],
        image: item,
        height: Math.floor(Math.random() * 100) + 100,
        age: `${parseFloat(Math.random() * 10 + 1).toFixed(1)} years`,
        address: `${
          R.strings.CITY[
            Math.round(Math.random() * (R.strings.CITY.length - 1))
          ]
        }, US`,
      };
      navigation.navigate('DetailInfo', {
        data: object,
        parent: arr_data_split[0],
      });
    } else {
      navigation.navigate('Detail', {
        parent: arr_data_split[0],
        children: [],
      });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={R.colors.baseWhite}
        translucent={true}
      />
      <Loader title={'Loading'} isVisible={loadingRedux} />
      <View style={{marginTop: RFValue(40)}}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={searchFilter}
          value={search}
          lightTheme
          round
          onClear={() => {
            setSearch('');
          }}
          inputStyle={{
            fontSize: R.sizes.txtTitle,
            fontFamily: R.fonts.NunitoRegular,
          }}
        />
      </View>
      <FlatList
        data={newData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <Image
              source={{uri: item, cache: 'force-cache'}}
              style={{width: width / 4, height: RFValue(100)}}
            />
          </TouchableOpacity>
        )}
        numColumns={4}
        ListEmptyComponent={
          <EmptyState title={'No data found'} subtitle={error} />
        }
        refreshing={false}
        onRefresh={() => fetchListBreed()}
        contentContainerStyle={{
          paddingBottom: RFValue(120),
        }}
      />
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseWhite,
  },
});
