import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GameScreenButton extends Component {
  render() {
    return (
      <TouchableOpacity 
      onPress={this.props.myOnPress}
      style={[styles.GameScreenButton,]}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    )
  }
}

GameScreenButton.PropTypes = {
    text: PropTypes.string
  
}

const styles = StyleSheet.create({
    GameScreenButton: {
        marginVertical: 200,
        alignItems:'center'
    }
});