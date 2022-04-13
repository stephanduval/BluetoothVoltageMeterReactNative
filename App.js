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
      <Text style={styles.text}> This Program is called {name}</Text>
      
        <View style = {styles.button}>
          <Button title='Mail Clerk' onPress={()=>{Linking.openURL('https://mailclerk.com/')}}></Button>
          <Text> 
                      {`
              line 1
              line 2
            `}                    
          </Text>

          <Button title='Update State var Name' onPress={onClickHandler}></Button>
        </View>
      <Text style={styles.text}>This is session number: {session.number} and about {session.title}</Text>
      <Text stlye={styles.text}>{current ? 'current Session' : 'next session'}</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  body: {
    //flex: 1,
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 30,
    borderColor: '#333333',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
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
