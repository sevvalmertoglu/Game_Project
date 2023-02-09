import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SignButton= () => {

    return (
      <TouchableOpacity style={styles.SignButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
        
      </TouchableOpacity>
    )

}

SignButton.PropTypes = {
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  SignButton: {
      display: 'flex',
      marginHorizontal:100,
      marginVertical:20,
      backgroundColor:"#ff1493",
      paddingVertical:15,
      borderRadius: 30,
      alignItems:'center',

    },
    signUpText: {
      color: '#ffe4e1',
      fontSize:20,
    },
    
});
export default SignButton