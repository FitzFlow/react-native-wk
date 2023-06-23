import React from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const MyButton = ({text, action, top}) => {
    return (
        <TouchableOpacity style={[styles.button, {marginTop: top}]} onPress={action}>
            <Text style = {styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderWidth: 3,
      paddingHorizontal: 70,
      width: "60%",
      backgroundColor: 'orange',
    //   marginTop: 20,
      borderRadius: 10
    },

    buttonText: {
      textAlign: 'center'
    }
  });