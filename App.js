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
  RefreshControl,
  FlatList
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Stephan');
  const updateName = () => {
    setName(name);
    Alert.alert(name);
  };

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {key:69, item: 'Item 69'}]);
    setRefreshing(false);
  }

  const [Items, setItems] = useState([
    {name: 'Name 1.5'},
    {name: 'Name 2.2'},
    {name: 'Name 3'},
    {name: 'Name 4'},
    {name: 'Name 5'},
    {name: 'Name 6'},
    {name: 'Name 7'},
    {name: 'Name 8'},
    {name: 'Name 9'},
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

            {/* Beginning of the Flatlist Component  */}
            <FlatList
            numColumns={2}
              keyExtractor={(item, index) => index.toString()}  // creates a key from the index of the item in the array
                  data={Items}
                  renderItem={({item}) => ( 
                    <View style={styles.item}>
                      <Text style={styles.text}>
                        {item.name}
                      </Text>
                    </View>
                  )}>  // Works like an map function
            </FlatList>

            {/* Beginning of the ScrollView Component */}

        {/* <ScrollView
             refreshControl={
              <RefreshControl
                refreshing={Refreshing}
                onRefresh={onRefresh}
                colors={['#ff00ff']}
              />
            }
            >
          
          
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
        </ScrollView> */}
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
