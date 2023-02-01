import React from 'react';
import {View} from 'react-native';
import { styles } from './style';


const Divider = props => {
  const {style} = props || {};
  return <View style={[styles.divider, style]} />;
};

export default Divider;
