import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,    
} from 'react-native';

const CustomButton = (props) => {
    return(
        <Pressable
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? 'grey' : 'purple'},
        ]}
        onPress={props.onPressFunction}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    )


}

const styles = StyleSheet.create({
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
}
)

export default CustomButton;