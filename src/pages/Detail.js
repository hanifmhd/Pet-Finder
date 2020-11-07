import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import api from '../actions/api';
import {EmptyState, Loader} from '../components';
import R from '../configs';

const {width, height} = Dimensions.get('screen');
const Detail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const loadingRedux = useSelector((state) => state.loading);
  const [data, setData] = useState([]);
  const [error, setError] = useState('We cant find any data');

  useEffect(() => {
    fetchListSubBreed(route.params.parent);
  }, []);

  const fetchListSubBreed = async (parent) => {
    await dispatch(api.getListSubBreed(parent))
      .then((result) => {
        let data_response = result.message;
        for (let i = 0; i < data_response.length; i++) {
          fetchImageSubBreed(i, parent, data_response[i]);
        }
      })
      .catch((e) => {
        setData([]);
        return Alert.alert(e);
      });
  };

  const fetchImageSubBreed = async (index, parent, sub) => {
    let obj = {
      name: '',
      image: '',
      height: Math.floor(Math.random() * 100) + 100,
    };
    await dispatch(api.getImageBreed(parent, sub))
      .then((result) => {
        obj.name = sub;
        obj.image = result.message;
        data.splice(index, 0, obj);
        setData(data);
      })
      .catch((e) => {
        setData([]);
        return Alert.alert(e);
      });
  };

  return (
    <View style={styles.container}>
      <Loader title={'Loading'} isVisible={loadingRedux} />
      <View style={styles.canvas}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Icon
            name={'chevron-back-outline'}
            size={RFValue(28)}
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: R.sizes.txtHeading3}}>Filter</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: RFValue(20),
          }}>
          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: R.sizes.txtHeading2,
              fontWeight: 'bold',
            }}>{`${route.params.parent} Pet${
            data.length > 1 ? 's' : ''
          }`}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name={'grid-outline'}
              size={RFValue(24)}
              style={{marginRight: RFValue(4)}}
              color={R.colors.baseGrey}
            />
            <Icon
              name={'reorder-four-outline'}
              size={RFValue(24)}
              color={R.colors.baseGrey}
            />
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                marginRight: RFValue(10),
                marginBottom: RFValue(10),
                width: width * 0.42,
                height: width * 0.45,
              }}>
              <View style={styles.cardContainer}>
                <Image
                  source={{uri: item.image, cache: 'force-cache'}}
                  style={{
                    borderRadius: RFValue(4),
                    width: width * 0.42,
                    height: width * 0.45,
                    opacity: 0.8,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: RFValue(8),
                    left: RFValue(10),
                    color: R.colors.baseWhite,
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          ListEmptyComponent={
            <EmptyState
              title={'No data found'}
              subtitle={`${error} for ${route.params.parent}`}
            />
          }
          refreshing={false}
          onRefresh={() => fetchListSubBreed(route.params.parent)}
          contentContainerStyle={{
            paddingBottom:
              Platform.OS === 'android' ? RFValue(100) : RFValue(40),
          }}
        />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseWhite,
    paddingTop: Platform.OS === 'android' ? 0 : RFValue(20),
  },
  canvas: {
    padding: RFValue(20),
  },
  cardContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: RFValue(4),
    margin: RFValue(4),
    alignItems: 'center',
  },
});
