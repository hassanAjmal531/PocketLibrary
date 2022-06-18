import React from "react";
import {View, Text,Image, TouchableOpacity, ScrollView, StyleSheet, Alert, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableRipple , Button, Avatar} from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { Formik } from "formik";
import forgotPassSchema from "../models/forgotPassSchema"
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../backend/FireBase/firbaseConfig" 


const ForgotPass = ()=> {

  const ResetPassword = (email)=>{
    sendPasswordResetEmail(auth, email).then(result=> console.log(result)).catch(e=> console.log(e));

  }
    return(

      <Formik
      initialValues={{ email: "" }}
      validateOnMount = {true}
      onSubmit ={values=> ResetPassword(values.email)}
      validationSchema= {forgotPassSchema}
      >
        {({ handleChange, handleBlur, handleSubmit,touched,errors,isValid, values }) => (

      <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView contentContainerStyle={style.screen}>
         <View style={style.img}>
          <Image style={style.img}  source={require("../Images/Logo.png")}></Image>
        </View>
       
          
          <View style={{display: "flex"}}>
            
            <Text style={{color: "white", textAlign: "center", fontSize: 30, fontWeight: "bolds", marginBottom: 10}}> Forgot your Password? </Text>
            <Text style={{color: "white", textAlign: "center", fontSize: 17, marginBottom: 15}}> No worries enter your email and we will send you instructions</Text>
           
          <TextInput 
          style={style.text} 
          label="Enter Email" 
          mode="outlined"  
          underlineColor="#fc5203"
          activeUnderlineColor="#fc5203" 
          theme={{colors:{text: "white", placeholder: "white"}}} 
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          ></TextInput>
           {(errors.email && touched.email)&& <Text style= {{color:"white", fontSize: 10, color: "red"}}> {errors.email}</Text>}

          <Button
          onPress={handleSubmit}
          disabled= {!isValid}
          mode="contained"
          style = {{borderRadius: 40, marginTop: 10, backgroundColor: isValid?"#ebb82d": "#c9c3b1"}}
          labelStyle={{ color: "white", fontSize: 18 }}
          color = "#ebb82d"
          >Send Email</Button>
          
            
            
          </View>
  
  
        </ScrollView>
        </KeyboardAvoidingView>
        )}
        </Formik>
        
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
      marginBottom: 20,
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