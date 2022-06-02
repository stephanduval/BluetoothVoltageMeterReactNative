/**
 * BluetoothVoltageMeterReactNative
 * https://github.com/stephanduval/BluetoothVoltageMeterReactNative
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('e.g. John');

  return (
    <View style={styles.body}
      keyboardShouldPersistTaps='always'
    >

      <Text style={styles.text}>Please Write Your Name:</Text>
      <TextInput
        //multiline
        style={styles.input}
        placeholder="e.g. John"
        keyboardType='default'
        maxLength={11}
        editable={true}
        onChangeText={text => setName(text)}
        //secureTextEntry={true} //Does not work with multi-line
      />
      <Text>Yout Name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // width: 400,
    // height: 400,
    flex: 1,
    backgroundColor: '#d3d3d3',
    borderWith: 5,
    borderColor: 'red',
    margin: 15,
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: 'red',
    margin: 30,
    width: 70,
    height: 90,
    color: 'white',
    fontSize: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Pressable: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    margin: 30,
    width: 70,
    height: 90,
    color: 'white',
    fontSize: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
