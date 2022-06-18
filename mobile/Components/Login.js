import React ,{useState} from "react";
import {View, Text,Image, TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableRipple , Button, Avatar} from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import style from "../styles/login"
// import auth from "../backend/FireBase/firbaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import loginSchema from "../models/userSchema"



const Login=({navigation})=>{

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signIn = ()=> {
    signInWithEmailAndPassword(auth, email, pass ).then((result)=>{
      navigation.navigate("Home");
    }).catch((e)=> console.log(e));
    
  }
    

    return(
      
      <Formik
      initialValues={{ email: '' , password: ""}}
      validateOnMount = {true}
      onSubmit ={values=> console.log(values)}
      validationSchema= {loginSchema}
      >
        {({ handleChange, handleBlur, handleSubmit,touched,errors,isValid, values }) => (


     <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle= {style.screen}>
        
        <View style={style.img}>
          <Image style={style.img}  source={require("../Images/Logo.png")}></Image>
        </View>
        <View style= {{paddingHorizontal: 20}}>
          <Text style= {{color: "white",fontSize: 30, fontWeight : "bold", marginBottom: 10 }}>Welcome</Text>
          
        
          <TextInput style={style.text} onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           
           value={values.email} label="enter username" mode="outlined"   underlineColor="#fc5203" activeUnderlineColor="#fc5203" theme={{colors:{text: "white", placeholder: "white"}}} ></TextInput>
          {(errors.email && touched.email)&& <Text style= {{color:"white"}}> {errors.email}</Text>}
          <TextInput style={style.text} onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password} label='enter password' mode="outlined"  underlineColor="#fc5203" activeUnderlineColor="#fc5203"  theme={{colors:{text: "white", placeholder: "white"}}}></TextInput>
          
          {(errors.password && touched.password)&& <Text style= {{color:"white"}}> {errors.password}</Text>}
          {/* <TouchableOpacity style = {style.button} onPress= {signIn}>
              <LinearGradient   start={{x: 0, y: 0}} end={{x: 1, y: 0.5}} colors={['#fc0303','#fc5203', '#fcc603', ]}>
                  <Text style={style.buttonText}>Login</Text>
              </LinearGradient>
          </TouchableOpacity> */}
          <Button 
          style = {{borderRadius: 40, marginTop: 10}}
          labelStyle={{ color: "white", fontSize: 18 }}
          mode="contained"
          color="#ebb82d"> Login</Button>
          <View style= {{display: "flex", flexDirection: "row-reverse", marginTop: 10}}>
            <TouchableOpacity>
              <Text style={{color: "white", fontSize: 12}}>Forgot Password? click Here</Text>
            </TouchableOpacity>
          </View>

          
          <View style={style.signupview}>
          <Text style= {{color: "white"}}>Dont have an account? </Text>
          <TouchableOpacity onPress= {()=> navigation.navigate("signup")} >
              
              <Text style={style.signup}>signup</Text>
             
            

          </TouchableOpacity>
          </View>

          
          
          
     </View>
       
        


      </ScrollView>
      </KeyboardAvoidingView>

)}
      </Formik>

    );

  
 
 
}

// const style = StyleSheet.create({
//     screen:{
//       flex: 1,
//       display:'flex',
//       flexDirection: 'column',
//       paddingHorizontal: 20,
//       paddingTop: 150,
//       backgroundColor: "#000000"

  
//     },
//     img: {
//       alignItems:'center',
//       justifyContent:'center',
//       marginTop: 20,
//       marginBottom: 80,
//       width: 250,
//       height: 110,
//       marginHorizontal: 50
      
      
    
      
//     },
//   text: {
//     fontSize: 15,
//     fontWeight:'bold',
//     marginVertical: 5,
//     backgroundColor: "#000000"
    

//   },
//   button:{
    
//     marginTop: 10,
//     marginHorizontal: 50,
//     borderRadius: 10
    


    
//   }, 
//   buttonText: {
//       height: 40,
//     paddingVertical: 6,
//     fontSize: 20,     
      
//       textAlign: "center"




//   },
//   signupview:{
//     alignItems: 'center',
//     marginVertical: 5
//   },
//   signup:{
//     marginTop:2,
//     color:"",
//     textDecorationLine:'underline',
//     fontSize: 17
//   },
//   Welcome:{
//     fontSize: 40,
//     alignContent: 'center',
//     fontWeight:'bold'
    
//   }

// });

export default module = Login;