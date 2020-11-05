import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';
import images from '../configs/images';
import GradientText from '../components/GradientText';

const data = {
  affenpinscher: [],
  african: [],
  airedale: [],
  akita: [],
  appenzeller: [],
  australian: ['shepherd'],
  basenji: [],
  beagle: [],
  bluetick: [],
  borzoi: [],
  bouvier: [],
  boxer: [],
  brabancon: [],
  briard: [],
  buhund: ['norwegian'],
  bulldog: ['boston', 'english', 'french'],
  bullterrier: ['staffordshire'],
  cairn: [],
  cattledog: ['australian'],
  chihuahua: [],
  chow: [],
  clumber: [],
  cockapoo: [],
  collie: ['border'],
  coonhound: [],
  corgi: ['cardigan'],
  cotondetulear: [],
  dachshund: [],
  dalmatian: [],
  dane: ['great'],
  deerhound: ['scottish'],
  dhole: [],
  dingo: [],
  doberman: [],
  elkhound: ['norwegian'],
  entlebucher: [],
  eskimo: [],
  finnish: ['lapphund'],
  frise: ['bichon'],
  germanshepherd: [],
  greyhound: ['italian'],
  groenendael: [],
  havanese: [],
  hound: ['afghan', 'basset', 'blood', 'english', 'ibizan', 'plott', 'walker'],
  husky: [],
  keeshond: [],
  kelpie: [],
  komondor: [],
  kuvasz: [],
  labrador: [],
  leonberg: [],
  lhasa: [],
  malamute: [],
  malinois: [],
  maltese: [],
  mastiff: ['bull', 'english', 'tibetan'],
  mexicanhairless: [],
  mix: [],
  mountain: ['bernese', 'swiss'],
  newfoundland: [],
  otterhound: [],
  ovcharka: ['caucasian'],
  papillon: [],
  pekinese: [],
  pembroke: [],
  pinscher: ['miniature'],
  pitbull: [],
  pointer: ['german', 'germanlonghair'],
  pomeranian: [],
  poodle: ['miniature', 'standard', 'toy'],
  pug: [],
  puggle: [],
  pyrenees: [],
  redbone: [],
  retriever: ['chesapeake', 'curly', 'flatcoated', 'golden'],
  ridgeback: ['rhodesian'],
  rottweiler: [],
  saluki: [],
  samoyed: [],
  schipperke: [],
  schnauzer: ['giant', 'miniature'],
  setter: ['english', 'gordon', 'irish'],
  sheepdog: ['english', 'shetland'],
  shiba: [],
  shihtzu: [],
  spaniel: [
    'blenheim',
    'brittany',
    'cocker',
    'irish',
    'japanese',
    'sussex',
    'welsh',
  ],
  springer: ['english'],
  stbernard: [],
  terrier: [
    'american',
    'australian',
    'bedlington',
    'border',
    'dandie',
    'fox',
    'irish',
    'kerryblue',
    'lakeland',
    'norfolk',
    'norwich',
    'patterdale',
    'russell',
    'scottish',
    'sealyham',
    'silky',
    'tibetan',
    'toy',
    'westhighland',
    'wheaten',
    'yorkshire',
  ],
  vizsla: [],
  waterdog: ['spanish'],
  weimaraner: [],
  whippet: [],
  wolfhound: ['irish'],
};

const Home = () => {
  const [keyData, setKeyData] = useState([]);
  useEffect(() => {
    let newDataKey = Object.keys(data);
    setKeyData(newDataKey);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.canvas}>
        <View style={{marginBottom: RFValue(20)}}>
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
                style={{
                  flex: 1,
                  backgroundColor: R.colors.baseWhite,
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
                }}>
                <View
                  style={{
                    backgroundColor: '#D4943B',
                    opacity: 0.6,
                    borderRadius: RFValue(40),
                    padding: RFValue(10),
                    marginBottom: RFValue(10),
                  }}>
                  <Image
                    source={images.dog}
                    style={{width: RFValue(40), height: RFValue(40)}}
                  />
                </View>
                <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>
                  {item}
                </Text>
                <Text style={{color: R.colors.baseGreyDark}}>{`${
                  data[item].length
                } pet${data[item].length > 0 ? 's' : ''}`}</Text>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
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
    paddingTop: Platform.OS === 'android' ? RFValue(4) : RFValue(34),
  },
  canvas: {
    padding: RFValue(20),
  },
  menuContainer: {
    flexDirection: 'row',
  },
});
