import React from "react";
import {View, Text,Image, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableRipple , Button, Avatar} from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import style from "../styles/login"
const Login=({navigation})=>{
    

    return(
      <ScrollView contentContainerStyle= {style.screen}>
        
        <View style={style.img}>
          <Image style={style.img}  source={require("../Images/Logo.png")}></Image>
        </View>
        <View>
          
        
          <TextInput style={style.text} label="enter username" mode="flat"   underlineColor="#fc5203" activeUnderlineColor="#fc5203" theme={{colors:{text: "#fcd808", placeholder: "#fc5203"}}} ></TextInput>
          
          <TextInput style={style.text} label='enter password' mode="flat"  underlineColor="#fc5203" activeUnderlineColor="#fc5203"  theme={{colors:{text: "#fcd808", placeholder: "#fc5203"}}}></TextInput>
          
          <TouchableOpacity style = {style.button} onPress= {()=> navigation.navigate("Home")}>
              <LinearGradient   start={{x: 0, y: 0}} end={{x: 1, y: 0.5}} colors={['#fc0303','#fc5203', '#fcc603', ]}>
                  <Text style={style.buttonText}>Login</Text>
              </LinearGradient>
          </TouchableOpacity>

          
          <View style={style.signupview}>
          <Text>Dont have an account? no worries you can sign up</Text>
          <TouchableOpacity onPress= {()=> navigation.navigate("signup")} >
              
              <Text style={style.signup}>signup</Text>
             
            

          </TouchableOpacity>
          </View>

          
          
          
        </View>
       
        


      </ScrollView>
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