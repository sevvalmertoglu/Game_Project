import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, {backgroundColor: this.props.bgColor}]}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

MyButton.PropTypes = {
    text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        marginHorizontal: 80,
        marginVertical: 20,
        paddingVertical: 15,
        borderRadius: 20,
        alignItems:'center'

    }
});