/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';
import Empty from '../pages/Empty';
import Home from '../pages/Home';

const {width} = Dimensions.get('screen');
const HomeStack = ({navigation}) => {
  const [selected, setSelected] = useState('Home');
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />

      {selected === 'Home' && <Home navigation={navigation} />}

      {selected === 'Chat' && <Empty navigation={navigation} />}

      {selected === 'Search' && <Empty navigation={navigation} />}

      {selected === 'Profile' && <Empty navigation={navigation} />}

      <View style={styles.normalBottomTab}>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={['Home', 'Chat', 'Search', 'Profile']}
          keyExtractor={(item, index) => item + index}
          showsHorizontalScrollIndicator={false}
          style={styles.listStyle}
          contentContainerStyle={styles.contentContainerListStyle}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.tabStyle}
              onPress={() => {
                if (selected !== item) {
                  setSelected(item);
                }
              }}>
              <Image
                style={selected === item ? styles.icon : styles.iconInactive}
                source={
                  item === 'Home'
                    ? R.images.home
                    : item === 'Chat'
                    ? R.images.chat
                    : item === 'Search'
                    ? R.images.search
                    : R.images.profile
                }
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  normalBottomTab: {
    backgroundColor: R.colors.baseWhite,
    maxHeight: RFValue(58),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  listStyle: {
    width: width,
    paddingTop: RFValue(10),
    marginBottom: Platform.OS === 'android' ? RFValue(-10) : undefined,
  },
  contentContainerListStyle: {
    height: RFValue(48),
  },
  tabStyle: {
    alignItems: 'center',
    width: (width * 0.8) / 3.2,
  },
  icon: {
    width: RFValue(26),
    height: RFValue(24),
  },
  iconInactive: {
    width: RFValue(26),
    height: RFValue(24),
    tintColor: R.colors.baseGrey,
  },
});
