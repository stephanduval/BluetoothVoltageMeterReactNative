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

const App = () => {
const [name, setName] = useState('Programming With Mash React Native Tutorial');
const [session, setSession] = useState({number:6,title:'State Title'});
const [current, setCurrent] = useState(true);


const onClickHandler = () => {
  setName('Voltage Reader')
  setSession({number: ++session.number, title: 'State Title Two'})
  setCurrent(false);
};





  return (
    <View style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.row1col1}>
        <Text style={styles.text}>{1}</Text>
        </View>
        <View style={styles.row1col2}>
        <Text style={styles.text}>{2}</Text>
        </View>
        <View style={styles.row1col3}>
        <Text style={styles.text}>{3}</Text>
        </View>
      </View>
      <View style={styles.row2}>
      <View style={styles.row2col1}>
        <Text style={styles.text}>{4}</Text>
        </View>
        <View style={styles.row2col2}>
        <Text style={styles.text}>{5}</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <View style={styles.row3col1}>
        <Text style={styles.text}>{6}</Text>
        </View>
        <View style={styles.row3col2}>
        <Text style={styles.text}>{7}</Text>
        </View>
      </View>
     
    </View>
  );
};
 
const styles = StyleSheet.create({
  body: {
    // width: 400,
    // height: 400,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d3d3d3',
    alignItems: 'stretch',
    justifyContent: 'center',
  
  },
  row1:{
    // width: 100,
    // height: 100,
   flex: 1,
   flexDirection: 'row',

  alignItems: 'stretch',
  justifyContent: 'center',

  },
  row2:{
    // width: 100,
    // height: 100,
    flex:2,
    backgroundColor: 'blue',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  row3:{
  //   width: 100,
  //   height: 100,
   flex:5,
   flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'stretch',
    justifyContent: 'center',

  },

  row1col1:{
    // width: 100,
    // height: 100,
   flex: 1,

    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  row1col2:{
    // width: 100,
    // height: 100,
   flex: 2,

    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',

  },
  row1col3:{
    // width: 100,
    // height: 100,
   flex: 3,

    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

  },

  row2col1:{
    // width: 100,
    // height: 100,
   flex: 1,

    backgroundColor: 'red',
    alignItems: 'stretch',
    justifyContent: 'center',

  },

  row2col2:{
    // width: 100,
    // height: 100,
   flex: 1,

    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',

  },

  row3col1:{
    // width: 100,
    // height: 100,
   flex: 1,

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },

  row3col2:{
    // width: 100,
    // height: 100,
   flex: 1,

    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    margin: 30,
    width: 300,  
    height: 90,  
  }
});

export default App;
