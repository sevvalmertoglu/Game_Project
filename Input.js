import { Text, TextInput, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Input = props => {
    return (
      <View style={styles.sevval}>
        <TextInput
        autoCapitalize={props.bigLetter}
        placeholder={props.Text}
        secureTextEntry={props.control}
        returnKeyType={props.next}
        style={styles.input}

        />
      </View>
    )
  };

  const styles = StyleSheet.create({
    sevval: {
        marginHorizontal: 20
    },
    input: {
        height: 40,
        margin: 4,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        borderColor: `#ff1493`,
        color: `#000000`,
        marginBottom: 8,
        fontSize:14,
        fontWeight: '600',
        },
});
  

  export default Input