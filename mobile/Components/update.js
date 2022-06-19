import React from "react";
import { View, Text, KeyboardAvoidingView, Image, ScrollView, StyleSheet, Alert } from "react-native";
import { TextInput , Button} from "react-native-paper";
import { Formik } from "formik";

import { getAuth, updatePassword } from "firebase/auth";
import auth from "../backend/FireBase/firbaseConfig"

import confirmSchema from "../models/confirmPasswordSchema"

const Update = ()=> {
  
  const PassUpdate = (pass)=> {
    const user = auth.currentUser;
    console.log(user);
    updatePassword(user, pass).then(() => {
      Alert.alert("password updated successfully")
      
    }).catch((error) => {
      // An error ocurred
      // ...
    });


  }


    return ( <Formik
        initialValues={{  Npassword: "", confirmPassword: "" }}
        validateOnMount = {true}
        onSubmit ={values=> PassUpdate(values.Npassword)}
        validationSchema= {confirmSchema}
        >
          {({ handleChange, handleBlur, handleSubmit,touched,errors,isValid, values }) => (
  
        <KeyboardAvoidingView style={{flex:1}}>
          <ScrollView contentContainerStyle={style.screen}>
           <View style={style.img}>
            <Image style={style.img}  source={require("../Images/Logo.png")}></Image>
          </View>
         
            
            <View style={{display: "flex"}}>
              
              <Text style={{color: "white", textAlign: "center", fontSize: 30, fontWeight: "bolds", marginBottom: 10}}> Update Profile Password </Text>
             
             
             <TextInput 
            style={style.text} 
            label="Enter New Password" 
            mode="outlined"  
            underlineColor="#fc5203"
            activeUnderlineColor="#fc5203" 
            theme={{colors:{text: "white", placeholder: "white"}}} 
            onChangeText={handleChange('Npassword')}
            onBlur={handleBlur('Npassword')}
            value={values.Npassword}
            ></TextInput>
             {(errors.Npassword && touched.Npassword)&& <Text style= {{color:"white", fontSize: 10, color: "red"}}> {errors.Npassword}</Text>}

             <TextInput 
            style={style.text} 
            label="Confirm Password" 
            mode="outlined"  
            underlineColor="#fc5203"
            activeUnderlineColor="#fc5203" 
            theme={{colors:{text: "white", placeholder: "white"}}} 
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            ></TextInput>
             {(errors.confirmPassword && touched.confirmPassword)&& <Text style= {{color:"white", fontSize: 10, color: "red"}}> {errors.confirmPassword}</Text>}
  
            <Button
            onPress={handleSubmit}
            disabled= {!isValid}
            mode="contained"
            style = {{borderRadius: 40, marginTop: 10, backgroundColor: isValid?"#ebb82d": "#c9c3b1"}}
            labelStyle={{ color: "white", fontSize: 18 }}
            color = "#ebb82d"
            >Update</Button>
            
              
              
            </View>
    
    
          </ScrollView>
          </KeyboardAvoidingView>
          )}
          </Formik>);
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

export default module = Update;