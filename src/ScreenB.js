import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';


function ScreenB({navigation}) {
    const onPressHandler = () => {
      navigation.navigate('Screen_A'); //navigate to the next screen
    }
    return(
      <View style={styles.body}>
        <Text>
          Screen B
        </Text>
        <Pressable
        onPress = {onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? 'grey' : 'purple'})}
        >
          <Text style={styles.text}> 
          Go to Screen A
          </Text>
        </Pressable>
       
        </View>
    )
  }

  
const styles = StyleSheet.create({ 
    body: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10, 
    }
  });

  export default ScreenB;
