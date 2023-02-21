import { Text, View, StyleSheet,TouchableOpacity,} from 'react-native'
import MyButton from "../MyButton";
import {Picker} from '@react-native-picker/picker';
import React, { useEffect, useState } from "react";
import GameScreenButton from "../GameScreenButton";
import {getQuestions, getCategories} from '../api';

const GameScreen = (props) => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [gameCategories, setCategories] = useState([]);
  const setMyStates = [selectedCategory, selectedDifficulty];


  useEffect(async () => {
    const result = await getCategories();
    setCategories(result.data.trivia_categories)
  }, [])

  
  onStart = () => {
    getQuestions(selectedCategory, selectedDifficulty)
      .then((response) => {
        props.navigation.navigate('detailpage', {paramKey: setMyStates});
      });
  };
  
    return (
      <View style={styles.pickerContainer}>
      <View>
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
            {gameCategories.map((item, index) => (
            <Picker.Item
            key={index}
            label={item.name}
            value={item.id}></Picker.Item>
        ))}
        </Picker>
      </View>

      <View>
      <Picker
        style={styles.picker}
        selectedValue={selectedDifficulty}
        onValueChange={(itemValue) => setSelectedDifficulty(itemValue)}
      >
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
      </Picker>
      </View>
      
      <MyButton/>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onStart}>
          <View style={styles.button}>
            <Text style={styles.buttonName}>GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </View>

      </View>
    
    );
  }
  const styles = StyleSheet.create({
    pickerContainer : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    picker: {
      height: 150,
      width: 300,
      backgroundColor:'pink',
      borderRadius: 50,
      justifyContent:'center',
      marginTop: 50,
    }
  });





export default GameScreen



  