import React , {useEffect, useState}from "react";
import {Alert,KeyboardAvoidingView,View, Text,Image, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableRipple , Button, Avatar} from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import auth, {RealtimeDb, db} from "../backend/FireBase/firbaseConfig" 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import SignUpSchema from "../models/SignupSchema"
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { ref, set, onValue } from "firebase/database";
import axios from "axios";
import { async } from "@firebase/util";


const SignUP = ({navigation})=> {
  const [checkUserExist, setUserExists] = useState(false);
  const [activity, setAcvity] = useState(true);
  const signUp = async(email, pass)=>{
    var uid ;
    setAcvity(false)
   
    createUserWithEmailAndPassword(auth, email, pass)
    .then(async res=>{
      
      navigation.navigate("Home");
    })
    
    

    
  }


    return(
      <Formik
      initialValues={{ email: "" , password: "", confirmPassword: ""}}
      validateOnMount = {true}
      onSubmit ={values=> signUp(values.email, values.password)}
      validationSchema= {SignUpSchema}
      
      >
        {({ handleChange, handleBlur, handleSubmit,touched,errors,isValid, values }) => (


      <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView contentContainerStyle={style.screen}>
         <View style={style.img}>
          <Image style={style.img}  source={require("../Images/Logo.png")}></Image>
        </View>
       
          
          <View>
            <Text style= {{color: "white",fontSize: 30, fontWeight : "bold", marginBottom: 10 }}> Sign UP</Text>
           
          <TextInput 
          style={style.text} 
          label="Enter Email" 
          mode="outlined"   
          underlineColor="white" 
          activeUnderlineColor="#fc5203" 
          theme={{colors:{text: "white", placeholder: "white"}}} 
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email} 
        
          >
           
          </TextInput>

          {(errors.email && touched.email)&& <Text style= {{color:"white", fontSize: 10, color: "red"}}> {errors.email}</Text>}


          <TextInput 
          style={style.text} 
          label='Enter Password' 
          mode="outlined"  
          underlineColor="#fc5203" 
          activeUnderlineColor="#fc5203"  
          theme={{colors:{text: "white", placeholder: "white"}}}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry 
          >

          </TextInput>

          {(errors.password && touched.password)&& <Text style= {{color:"white", fontSize: 10, color: "red"}}> {errors.password}</Text>}

          <TextInput 
          style={style.text} 
          label='Confirm Password' 
          mode="outlined"  
          underlineColor="#fc5203" 
          activeUnderlineColor="#fc5203"  
          theme={{colors:{text: "white", placeholder: "white"}}}
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          value={values.confirmPassword} 
          secureTextEntry
          >

          </TextInput>
          {(errors.confirmPassword && touched.confirmPassword)&& <Text style= {{color:"white", fontSize: 10, color: "red"}}> {errors.confirmPassword}</Text>}

          {checkUserExist && <Text style= {{color:"white", fontSize: 10, color: "red"}}> An account already exists with this email. please login with the email or reset the password using forgot password</Text> }



          {checkUserExist && <View style= {{display: "flex", flexDirection: "row-reverse", marginTop: 10}}>
            <TouchableOpacity>
              <Text style={{color: "white", fontSize: 12, marginBottom: 5}}>Forgot Password? <Text style={{color: "#ebb82d", fontSize: 12}} >click Here</Text></Text>
            </TouchableOpacity>
          </View>}

          {activity === true? <Button 
          onPress={handleSubmit}
           disabled= {!isValid}
          mode="contained"
          style = {{borderRadius: 40, marginTop: 10,backgroundColor: isValid?"#ebb82d": "#c9c3b1" }}
          labelStyle={{ color: "white", fontSize: 18 }}
          color = "#ebb82d"
          
          >Create account</Button>: <View style={{backgroundColor:"#ebb82d", height: 40, justifyContent:"center", borderRadius:40}}><ActivityIndicator color="white"></ActivityIndicator></View>}


          {/* <TouchableOpacity style = {style.button} onPress= {()=>{
            signUp(email, pass);

          }}>
              <LinearGradient   start={{x: 0, y: 0}} end={{x: 1, y: 0.5}} colors={['#fc0303','#fc5203', '#fcc603', ]}>
                  <Text style={style.buttonText}>Sigup</Text>
              </LinearGradient>
          </TouchableOpacity> */}
            
            
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
      paddingTop: 20,
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

export default module = SignUP;