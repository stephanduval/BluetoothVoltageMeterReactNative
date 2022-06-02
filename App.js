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
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';

const App = () => {
  const [name, SetName] = useState('e.g. John');
  const [submitted, SetSubmitted] = useState('false');
  const [showModalWarning, SetShowModalWarning] = useState('false');

  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      SetShowModalWarning(true);
    }
  };

  return (
    <ScrollView>
      <View style={styles.body} keyboardShouldPersistTaps="always">
        <Modal
          visible={showModalWarning}
          onRequestClose={() => SetShowModalWarning('false')}
          animationType="slide">
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text>WARNING!</Text>
              </View>
              <Text>'The name must be longer than 3 characters'</Text>
              <Pressable onPress={() => SetShowModalWarning(false)}>
                <Text style={styles.text}> OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.text}>Please Write Your Name:</Text>
        <TextInput
          //multiline
          style={styles.input}
          placeholder="e.g. John"
          keyboardType="default"
          maxLength={11}
          editable={true}
          onChangeText={text => SetName(text)}
          //secureTextEntry={true} //Does not work with multi-line
        />
        <Button
          title="Submit"
          onPress={onPressHandler}
          // disabled = {submitted}
        />

        {submitted ? <Text>You are registered as: {name}</Text> : null}

        <Button title="Reset form" onPress={onPressHandler} />
        <Text>TouchableOpacity</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onPressHandler}
          activeOpacity={0.1} //0.2 by default (how opque the Touchable is when clicked)
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>{submitted ? 'Clear' : 'Submit'}</Text>
        </TouchableOpacity>
        <Text>TouchableHilight</Text>

        <TouchableHighlight
          style={styles.button}
          onPress={onPressHandler}
          activeOpacity={0.1} //0.2 by default (how opque the Touchable is when clicked)
          underlayColor="white">
          <Text style={styles.text}>Submit</Text>
        </TouchableHighlight>

        <TouchableHighlight>
          <Text>{submitted ? 'Clear' : 'Submit'}</Text>
        </TouchableHighlight>
        <Text>TouchableWithoutFeedback</Text>
        <TouchableWithoutFeedback //Does not accept stylesheets</View>
        >
          <View style={styles.button} onPress={onPressHandler}>
            <Text style={styles.text}>Submit</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Text>{submitted ? 'Clear' : 'Submit'}</Text>
        </TouchableWithoutFeedback>

        <Text>'Pressable'</Text>
        <Pressable
          style={({pressed}) => [
            styles.button,
            {backgroundColor: pressed ? 'grey' : 'purple'},
          ]}
          onPress={onPressHandler}>
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      </View>
    </ScrollView>
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
    padding: 10,
    color: 'white',
    fontSize: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: 10,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099', //Using alpha channel at end for transparency!
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
