import MaskedView from '@react-native-community/masked-view';
import React from 'react';
import {Text} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import R from '../configs';

const GradientText = ({text, style}) => {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearTextGradient
        style={style}
        locations={[0, 1]}
        colors={[R.colors.basePrimaryLight, R.colors.basePrimary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text>{text}</Text>
      </LinearTextGradient>
    </MaskedView>
  );
};

export default GradientText;
