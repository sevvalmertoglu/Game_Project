import { Text, View, StyleSheet} from 'react-native'
import MyButton from "../MyButton";
import {Picker} from '@react-native-picker/picker';
import React, { useState } from "react";
import GameScreenButton from "../GameScreenButton";

const GameScreen = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [selectedValue2, setSelectedValue2] = useState("hard");

    return (
      <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}

        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Swift" value="swift" />

      </Picker>
      </View>



      <View style={styles.contain}>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue2}
        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
      >
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
      </Picker>
      </View>
      
      <MyButton/>
      <GameScreenButton onPress={() => navigation.navigate('gamescreen')}  title="Get Started" />
      </View>
    
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 200,
    },

    contain: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 200
    },

    picker: {
      height: 250,
       width: 250 
    }

  });

  export default GameScreen



  