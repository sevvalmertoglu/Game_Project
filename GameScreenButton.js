import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GameScreenButton extends Component {
  render() {
    return (
      <TouchableOpacity 
      onPress={this.props.gameonPress}
      style={[styles.GameScreenButton]}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

GameScreenButton.PropTypes = {
    text: PropTypes.string
  
}

const styles = StyleSheet.create({
    GameScreenButton: {
        display: 'flex',
        marginVertical: 20,
        alignItems: 'center',
        backgroundColor:'pink',
        fontSize:20,
        width:100,
        height:100,
        borderRadius: 50,
        marginLeft:150,

        
    }
});