/**
 * BluetoothVoltageMeterReactNative
 * https://github.com/stephanduval/BluetoothVoltageMeterReactNative
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';
import ScrollContentViewNativeComponent from 'react-native/Libraries/Components/ScrollView/ScrollContentViewNativeComponent';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';

const App = () => {
  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    
  ]);

  return (
    <View style={styles.body}>
     


{
      Items.map((objectItem)=>{
        return ( <View style={styles.item}>
        <Text style={styles.text} key={objectItem.key}> {objectItem.item}</Text>
        </View>

        )
      })
      }
    </View>
  ) 
};

const styles = StyleSheet.create({
  body: {
    // width: 400,
    // height: 400,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d3d3d3',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 46,
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    margin: 30,
    width: 300,
    height: 90,
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
