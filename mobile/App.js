/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler'
import BookDetails from './Components/BookDetails';

import Login from './Components/Login';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignUp from './Components/SignUp';
import ForgotPass from './Components/ForgotPass';
import Home from './Components/Home';
import Fav from './Components/favourite';
import Update from './Components/update';
import login from './styles/login';
import auth from "./backend/FireBase/firbaseConfig"


const stack = createNativeStackNavigator();

const App= () => {
  var user;

  useEffect(()=>{
   


  });
 

  return (
   <NavigationContainer>
     <stack.Navigator
     screenOptions={{headerShown: false}}>
      
      
       <stack.Screen name='login' component={Login}></stack.Screen>
       
       
       <stack.Screen options={{headerShown: false}} name='signup' component={SignUp}></stack.Screen>
       <stack.Screen options={{headerShown: false}} name='Home' component={Home} ></stack.Screen>
       <stack.Screen name='forgot' component={ForgotPass}></stack.Screen>
       <stack.Screen name='det' component={BookDetails}></stack.Screen>
     </stack.Navigator>
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
