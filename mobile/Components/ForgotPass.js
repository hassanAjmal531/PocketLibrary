import React from "react";
import {View, Text,Image, TouchableOpacity, ScrollView, StyleSheet, Alert, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableRipple , Button, Avatar} from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";


const ForgotPass = ()=> {
    return(
      <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView contentContainerStyle={style.screen}>
         <View style={style.img}>
          <Image style={style.img}  source={require("../Images/Logo.png")}></Image>
        </View>
       
          
          <View style={{display: "flex"}}>
            <View></View>
            <Text style={{color: "white"}}> Forgot your Password? </Text>
            <Text style={{color: "white"}}> No worries enter your email and we will send you instructions</Text>
           
          <TextInput 
          style={style.text} 
          label="Enter Email" 
          mode="outlined"  
          underlineColor="#fc5203"
          activeUnderlineColor="#fc5203" 
          theme={{colors:{text: "white", placeholder: "white"}}} ></TextInput>

          <Button
          mode="contained"
          style = {{borderRadius: 40, marginTop: 10}}
          labelStyle={{ color: "white", fontSize: 18 }}
          color = "#ebb82d"
          >Send Email</Button>
          
            
            
          </View>
  
  
        </ScrollView>
        </KeyboardAvoidingView>
        
      );
}


const style = StyleSheet.create({
    screen:{
      flex: 1,
      display:'flex',
      flexDirection: 'column',
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: "#000000",
      

  
    },
    img: {
      alignItems:'center',
      justifyContent:'center',
      marginTop: 20,
      marginBottom: 80,
      width: 250,
      height: 110,
      marginHorizontal: 50
      
      
    
      
    },
  text: {
    fontSize: 15,
    fontWeight:'bold',
    marginVertical: 5,
    backgroundColor: "#000000"
    

  },
  button:{
    
    marginTop: 10,
    marginHorizontal: 50,
    borderRadius: 10
    


    
  }, 
  buttonText: {
      height: 40,
    paddingVertical: 6,
    fontSize: 20,     
      
      textAlign: "center"




  },
  signupview:{
    alignItems: 'center',
    marginVertical: 5
  },
  signup:{
    marginTop:2,
    color:"white",
    textDecorationLine:'underline',
    fontSize: 17
  },
  Welcome:{
    fontSize: 40,
    alignContent: 'center',
    fontWeight:'bold'
    
  }

});

export default module = ForgotPass;