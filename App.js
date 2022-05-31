/**
 * BluetoothVoltageMeterReactNative
 * https://github.com/stephanduval/BluetoothVoltageMeterReactNative
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Stephan');
  const updateName = () => {
    setName(name);
    Alert.alert(name);
  };

  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1.3'},
    {key: 2, item: 'Item 2.2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
  ]);

  return (
    <View style={styles.body}>
      <View style={styles.border}>
        <Text style={styles.text}>{name}'s App</Text>

        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'red' : 'blue',
            },
            styles.button,
          ]}
          onPress={() => updateName('Stephan')}>
          <Text style={styles.buttonText}>Button</Text>
        </Pressable>

        <Button title="Update Name" onPress={() => updateName('Bill')} />

        <ScrollView>
          {Items.map(objectItem => {
            return (
              <View style={styles.item}>
                <Text style={styles.text} key={objectItem.key}>
                  {' '}
                  {objectItem.item}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // width: 400,
    // height: 400,
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderWith: 5,
    borderColor: 'red',
    margin: 15,
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
});

export default App;
