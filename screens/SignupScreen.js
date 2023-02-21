import { View, Text, StyleSheet,} from 'react-native'
import React from 'react'
import Input from "../Input";
import SignButton from "../SignButton";


const Signup = () => {
  return (
    <View>
      <Text style ={styles.accountText}>Please create a account.</Text>
     
      <Input 
      next={"next"}
      bigLetter="none"
      Text="Name"
      /> 
      <Input 
      next={"next"}
      bigLetter="none" 
      Text="Surname"
      />
    <Input 
      next={"next"}
      bigLetter="none"
      Text="Username"
      />
      <Input 
      bigLetter="none"
      control={true}
      Text="Password"
      />
      <Input 
      bigLetter="none"
      control={true}
      Text="Again Password"
      />
       <SignButton/>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    accountText: {
      backgroundColor: 'pink',
      fontSize: 20,
      paddingLeft:90,
      height:150,
      paddingHorizontal:20,
      paddingTop:120,
      color: "#ff1493",
    },
  });

export default Signup