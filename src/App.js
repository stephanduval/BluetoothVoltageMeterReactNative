import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Stack = createStackNavigator();


function ScreenA({navigation}) {  //requires the navigation prop to be passed in as an argument
    const onPressHandler = () => {
    navigation.navigate('Screen_B'); //navigate to the next screen  
    // navigation.replace('Screen_B'); //navigate to the next screen   
  }
    return(
    <View style={styles.body}>
      <Text>
        Screen A
      </Text>
      <Pressable
      onPress = {onPressHandler}
      style={({pressed}) => ({backgroundColor: pressed ? 'grey' : 'purple'})}
      >
        <Text style={styles.text}> 
        Go to Screen B
        </Text>
      </Pressable>
    </View>
  )
}


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

function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        header: () => null
      }}>
        <Stack.Screen 
        name="Screen_A" 
        component={ScreenA} 
        options={{
          header: () => null,
        }}

        />
        <Stack.Screen 
        name="Screen_B" 
        component={ScreenB} 

        />
        </Stack.Navigator>
    </NavigationContainer>
  )

};

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

export default App;
