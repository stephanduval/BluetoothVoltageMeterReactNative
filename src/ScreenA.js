import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

function ScreenA({navigation}) {
  //requires the navigation prop to be passed in as an argument
  const onPressHandler = () => {
    navigation.navigate('Screen_B'); //navigate to the next screen
    // navigation.replace('Screen_B'); //navigate to the next screen
  };
  return (
    <View style={styles.body}>
      <Text>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? 'grey' : 'purple'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default ScreenA;
