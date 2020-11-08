import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import api from '../actions/api';
import {Loader} from '../components';
import R from '../configs';
import Empty from './Empty';

const {width, height} = Dimensions.get('screen');
const tag = ['Male', 'Friendly', 'Intelligent', 'Trained', 'Good Boi'];
const DetailInfo = ({navigation, route}) => {
  const dispatch = useDispatch();
  const loadingRedux = useSelector((state) => state.loading);
  const [data, setData] = useState(route.params.data);
  const [parent, setParent] = useState(route.params.parent);
  const [image, setImage] = useState([]);
  const [like, setLike] = useState(false);
  const [error, setError] = useState('We cant find any data');

  useEffect(() => {
    fetchImageSubBreed();
  }, []);

  const fetchImageSubBreed = async () => {
    await dispatch(api.getImageSubBreed(parent, data.name))
      .then((result) => {
        setImage(result.message);
      })
      .catch((e) => {
        setData([]);
        return Alert.alert(e);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Loader title={'Loading'} isVisible={loadingRedux} />
      <Image
        source={{uri: data.image}}
        style={{width: width, height: height / 2}}
      />
      <Icon
        name={'chevron-back-outline'}
        size={RFValue(28)}
        color={R.colors.baseWhite}
        style={{
          position: 'absolute',
          top: RFValue(40),
          left: RFValue(20),
        }}
        onPress={() => navigation.goBack()}
      />
      <Icon
        name={`heart${like ? '' : '-outline'}`}
        size={RFValue(28)}
        color={like ? R.colors.baseRed : R.colors.baseWhite}
        style={{
          position: 'absolute',
          top: RFValue(40),
          right: RFValue(20),
        }}
        onPress={() => setLike(!like)}
      />
      <View
        style={{padding: RFValue(20), position: 'absolute', top: height / 2.8}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: R.sizes.txtHeading1,
              color: R.colors.baseWhite,
              textTransform: 'capitalize',
            }}>
            {`${data.name}, `}
          </Text>
          <Text
            style={{fontSize: R.sizes.txtHeading1, color: R.colors.baseWhite}}>
            {data.age}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={'location-outline'}
            size={RFValue(18)}
            color={R.colors.baseWhite}
            style={{marginRight: RFValue(2)}}
          />
          <Text
            style={{fontSize: R.sizes.txtHeading3, color: R.colors.baseWhite}}>
            {data.address}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          zIndex: 100,
          alignSelf: 'flex-end',
          alignItems: 'center',
          marginRight: RFValue(20),
          marginTop: RFValue(-30),
          width: RFValue(46),
          backgroundColor: R.colors.basePrimary,
          padding: RFValue(10),
          borderRadius: RFValue(30),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        }}
        onPress={() => navigation.navigate('Chat')}>
        <Image
          source={R.images.chat_info}
          style={{
            width: RFValue(24),
            height: RFValue(24),
          }}
        />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: RFValue(20),
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: RFValue(20)}}>
          <Text style={{fontWeight: 'bold', marginBottom: RFValue(10)}}>
            Introduction
          </Text>
          <Text
            style={{
              textAlign: 'justify',
              color: R.colors.baseGreyDark,
              marginBottom: RFValue(10),
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            malesuada magna egestas auctor viverra. Vivamus ex diam, elementum
            vitae egestas eu, tincidunt vel elit. Cras malesuada condimentum
            arcu. Mauris felis enim, tempor ut pharetra quis, tristique
            malesuada neque. Suspendisse nisl tortor, lacinia ut ipsum eget,
            tempor rutrum velit. Maecenas dignissim ut nulla sit amet hendrerit.
            Cras vulputate odio non est hendrerit dapibus. Morbi et egestas
            arcu. Aliquam blandit eleifend diam eu sodales. Ut lobortis nisi sit
            amet molestie dignissim. Donec at pulvinar magna. Sed sodales sem
            sed purus vehicula dapibus. Sed scelerisque nunc et ipsum tincidunt
            tincidunt. Integer ut dolor sit amet arcu venenatis ultricies vel
            sed lacus. In commodo magna purus, eu sollicitudin nibh lobortis
            vel. Vestibulum tincidunt diam nec purus varius dignissim.
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tag.map((item, index) => (
              <View
                key={index}
                style={{
                  marginRight: RFValue(10),
                  paddingHorizontal: RFValue(20),
                  paddingVertical: RFValue(10),
                  borderTopLeftRadius: RFValue(20),
                  borderTopRightRadius: RFValue(20),
                  borderBottomLeftRadius: RFValue(20),
                  borderBottomRightRadius: RFValue(20),
                  borderColor: R.colors.baseGrey,
                  borderWidth: 1,
                }}>
                <Text
                  style={{fontSize: RFValue(8), color: R.colors.baseGreyDark}}>
                  {item}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{marginBottom: RFValue(20)}}>
          <Text style={{fontWeight: 'bold', marginBottom: RFValue(10)}}>
            Gallery
          </Text>
          {image.length === 0 ? (
            <Text style={{alignSelf: 'center'}}>No image</Text>
          ) : (
            <View style={{flexDirection: 'row'}}>
              {image.map((item, index) =>
                index <= 2 ? (
                  <Image
                    key={index}
                    source={{uri: item, cache: 'force-cache'}}
                    style={{
                      width: RFValue(60),
                      height: RFValue(60),
                      borderRadius: RFValue(4),
                      marginRight: RFValue(10),
                    }}
                  />
                ) : index === 3 ? (
                  <View
                    key={index}
                    style={{
                      backgroundColor: '#d2e5fc',
                      width: RFValue(60),
                      height: RFValue(60),
                      borderRadius: RFValue(4),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontWeight: '700',
                        color: R.colors.basePrimary,
                      }}>
                      {`+${image.length - 3}`}
                    </Text>
                  </View>
                ) : null,
              )}
            </View>
          )}
        </View>
        <View style={{marginBottom: RFValue(20)}}>
          <Text style={{fontWeight: 'bold', marginBottom: RFValue(10)}}>
            Owner Info
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{borderRadius: RFValue(80), marginRight: RFValue(10)}}>
              <Image
                source={R.images.luka_doncic}
                style={{
                  width: RFValue(40),
                  height: RFValue(40),
                  borderRadius: RFValue(80),
                }}
              />
            </View>
            <View>
              <Text>Luka Doncic</Text>
              <Text style={{color: R.colors.baseGreyDark}}>
                luka.doncic@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
