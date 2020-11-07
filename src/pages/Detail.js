import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {EmptyState} from '../components';
import R from '../configs';

const Detail = ({navigation, route}) => {
  const [data, setData] = useState({
    parent: '',
    children: [],
  });
  useEffect(() => {
    setData(route.params.data);
  }, []);
  console.log(data);
  return (
    <View style={styles.container}>
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
      <View>
        {data.children.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
      <EmptyState
        title={'Coming soon'}
        subtitle={'We are preparing something new'}
        soon
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseWhite,
    padding: RFValue(20),
  },
});
