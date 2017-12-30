import React from 'react';
import { asset, Pano, Text, View, AmbientLight } from 'react-vr';
import Penholder from './Penholder';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={ 2.5 } />
        <Pano source={asset('background.jpeg')} />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 2, -6]}],
          }}>
          VR office
        </Text>
        <Penholder />
      </View>
    );
  }
};
