import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import api from '../actions/api';
import {EmptyState, Loader} from '../components';
import R from '../configs';

const {width, height} = Dimensions.get('screen');
const city = [
  "Bailey's",
  'Prairie',
  'Wakita',
  'Horseshoe',
  'Trainer',
  'Valley Acres',
  'St. Joe',
  'Orient',
  'Longtown',
  'Aldine',
  'North Randall',
  'Water Mill',
  'Dunbar',
  'Brooker',
  'Pine Knoll',
  'Andersonville',
  'Makena',
  'Tyro',
  'Nogal',
  'Alburg',
  'Weskan',
  'Plessis',
  'Mayodan',
  'Keshena',
  'Cuartelez',
  'Richmond',
];
const Detail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const loadingRedux = useSelector((state) => state.loading);
  const parent = route.params.parent;
  const children = route.params.children;
  const [data, setData] = useState([]);
  const [error, setError] = useState('We cant find any data');
  const [grid, setGrid] = useState(2);

  useEffect(() => checkData(), []);

  const checkData = () => {
    if (data.length > 0 && data.hasOwnProperty('image')) {
      return;
    } else {
      for (let i = 0; i < children.length; i++) {
        fetchImageSubBreed(i, parent, children[i]);
      }
    }
  };

  const fetchImageSubBreed = async (index, parent, sub) => {
    let obj = {
      name: '',
      image: '',
      height: Math.floor(Math.random() * 100) + 100,
      age: `${parseFloat(Math.random() * 10 + 1).toFixed(1)} years`,
      address: `${city[Math.round(Math.random() * (city.length - 1))]}, US`,
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
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={R.colors.baseWhite}
        translucent={true}
      />
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
            }}>{`${parent} Pet${children.length > 1 ? 's' : ''}`}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name={'grid-outline'}
              size={RFValue(24)}
              style={{marginRight: RFValue(10)}}
              color={grid === 2 ? undefined : R.colors.baseGrey}
              onPress={() => setGrid(2)}
            />
            <Icon
              name={'reorder-four-outline'}
              size={RFValue(30)}
              color={grid === 1 ? undefined : R.colors.baseGrey}
              onPress={() => setGrid(1)}
            />
          </View>
        </View>
        <FlatList
          data={data}
          key={grid}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                marginRight: RFValue(10),
                marginBottom: RFValue(10),
                width: width * (grid === 2 ? 0.42 : 0.87),
                height: width * 0.45,
              }}
              onPress={() =>
                navigation.navigate('DetailInfo', {data: item, parent: parent})
              }>
              <View style={styles.cardContainer}>
                <Image
                  source={{uri: item.image, cache: 'force-cache'}}
                  style={{
                    borderRadius: RFValue(4),
                    width: width * (grid === 2 ? 0.42 : 0.87),
                    height: width * 0.45,
                    opacity: 0.6,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                  }}
                  resizeMethod={'resize'}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: RFValue(22),
                    left: RFValue(10),
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      fontWeight: 'bold',
                    }}>
                    {`${item.name}, `}
                  </Text>
                  <Text>{item.age}</Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: RFValue(8),
                    left: RFValue(10),
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name={'location-outline'}
                    size={RFValue(12)}
                    style={{marginRight: RFValue(2)}}
                  />
                  <Text>{item.address}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={grid}
          ListEmptyComponent={
            data.length === 0 && (
              <EmptyState
                title={'No data found'}
                subtitle={`${error} for ${parent}`}
              />
            )
          }
          refreshing={false}
          onRefresh={() => checkData()}
          contentContainerStyle={{
            paddingBottom:
              Platform.OS === 'android' ? RFValue(100) : RFValue(100),
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
    paddingTop: RFValue(20),
  },
  canvas: {
    padding: RFValue(20),
  },
  cardContainer: {
    borderRadius: RFValue(4),
    margin: RFValue(4),
    alignItems: 'center',
  },
});
