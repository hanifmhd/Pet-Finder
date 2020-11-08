import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import api from '../actions/api';
import {EmptyState, GradientText, Loader} from '../components';
import R from '../configs';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const loadingRedux = useSelector((state) => state.loading);
  const [error, setError] = useState('We cant find any data');
  const [keyData, setKeyData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchListBreed();
  }, []);

  const fetchListBreed = async () => {
    await dispatch(api.getListAllBreeds())
      .then((result) => {
        setData(result.message);
        setKeyData(Object.keys(result.message));
      })
      .catch((e) => {
        setData('');
        setKeyData([]);
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
        <View style={{marginBottom: RFValue(10)}}>
          <GradientText
            text={'Breed'}
            style={{fontSize: R.sizes.txtHeading1, fontWeight: 'bold'}}
          />
          <Text style={{color: R.colors.baseGreyDark}}>
            Find your lovely puppies and get it within 2 days
          </Text>
        </View>
        <FlatList
          data={keyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[styles.container, styles.cardContainer]}
                onPress={() =>
                  navigation.navigate('Detail', {
                    parent: item,
                    children: data[item],
                  })
                }>
                <View
                  style={{
                    backgroundColor: '#D4943B',
                    opacity: Platform.OS === 'android' ? 0.4 : 0.6,
                    borderRadius: RFValue(40),
                    padding: RFValue(10),
                    marginBottom: RFValue(10),
                  }}>
                  <Image
                    source={R.images.dog}
                    style={{width: RFValue(40), height: RFValue(40)}}
                  />
                </View>
                <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>
                  {item}
                </Text>
                {data && (
                  <Text style={{color: R.colors.baseGreyDark}}>{`${
                    data[item].length
                  } pet${data[item].length > 1 ? 's' : ''}`}</Text>
                )}
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          ListEmptyComponent={
            <EmptyState title={'No data found'} subtitle={error} />
          }
          refreshing={false}
          onRefresh={() => fetchListBreed()}
          contentContainerStyle={{
            paddingBottom:
              Platform.OS === 'android' ? RFValue(100) : RFValue(40),
          }}
        />
      </View>
    </View>
  );
};

export default Home;

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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: RFValue(20),
    borderRadius: RFValue(4),
    margin: RFValue(4),
    alignItems: 'center',
  },
});
