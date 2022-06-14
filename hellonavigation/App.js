/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { ImageHello } from './components/ImageHello';

const App = () => {

  return (
    // <View style={styles.container}>
    //   <StylesHello />
    // </View>
    //<FlexHello />
    <ImageHello />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D17FD6',
  },
});

export default App;
