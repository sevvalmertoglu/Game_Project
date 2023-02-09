import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity ,KeyboardAvoidingView,ScrollView, } from "react-native";
import Input from "../Input";
import MyButton from "../MyButton";

  const LoginForm = ({navigation}) => {
    return (
      <View>
          
  
        <SafeAreaView style={styles.safeArea}>
        
        <View style ={styles.headBackground} />
        
             
        <KeyboardAvoidingView behavior='position'>
        <View style={styles.titleContainer}>
        <Text style ={styles.logo}>TRIVIA CRACK</Text>
        <Text style ={styles.logoDescripton}>LOGIN PAGE</Text>
        </View>
        <ScrollView>
        <View style = {styles.loginArea}>
        <Text style ={styles.signInText}>Sign In</Text>
        <Text style = {styles.loginAreaTitle}>Please enter your username and password to login.</Text>
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
              <MyButton
              bgColor={"#ff1493"}
              text="SIGN IN NOW"
              />
              

        </View>
        </ScrollView>
        <View style={styles.signUpArea}>
        <Text style={styles.signUpDescription}>Don't have an account?</Text>
        <Button onPress={() => navigation.navigate('signup')}  title="Sign up" />
        </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    );
    }  


const styles = StyleSheet.create(
    {
      safeArea: {
        backgroundColor: 'pink'
      },
        signInText:{
            paddingTop:10,
            marginHorizontal: 120,
            marginVertical: 15,
            fontSize: 20,
            color: "#ff1493"
        },
        headBackground: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: 1000,
            width: '48%',
            backgroundColor: '#ff69b4',
          },
          titleContainer: {
            marginTop: 50,
          },
          logo: {
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            color: '#ffe4e1'
          },
          logoDescripton: {
            textAlign: 'center',
            fontSize: 30,
            color: '#f2f2f2'
          },
        loginArea: {
            marginHorizontal: 40,
            marginVertical: 40, 
            backgroundColor: '#fff',
            borderRadius: 30,

            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 3,
            shadowOffset:{
            width: 5,
            height: 10,
            },
            elevation: 4,
        },
        signUpDescription: {
          marginHorizontal: 110,
          fontSize: 15,
          color: `#a9a9a9`
        },
        loginAreaTitle: {
            fontSize: 15,
            paddingHorizontal: 50,
            paddingTop:10,
            textAlign: 'center',
          },


       
    } 
);

export default LoginForm
