/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> Programming With Mash React Native Tutorial</Text>
      <Button title='Mail Clerk' onPress={()=>{Linking.openURL('https://mailclerk.com/')}}></Button>
    </View>
  );
};
 
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
