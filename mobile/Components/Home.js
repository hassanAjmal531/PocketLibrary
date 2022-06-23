import React, {useState, useEffect} from "react";
import { Button, Card , Paragraph, Title, TextInput } from "react-native-paper";
import {Image,Dimensions,View ,Text, ScrollView, StyleSheet,  Alert,KeyboardAvoidingView, TouchableOpacity} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import axios from "axios";
import Book from "./Book";
import Fav from "./favourite"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Update from "./update";
import Slider from "../Components2/slider";
import CardBook from "../Components2/CardBook";
import Header from "../Components2/header";
import { Formik } from "formik";
import searchSchema from "../models/SearchSchema";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import { getAuth, updatePassword, signOut } from "firebase/auth";
import auth from "../backend/FireBase/firbaseConfig"


const {width, height} = Dimensions.get("screen");
const tab = createBottomTabNavigator();

const component = ({navigation})=>{

    const [data, setData] = useState([]);
    const[tData, setTData] = useState([]);
    const [query, setquery] = useState("");
    const [pageButton, setPageButton] = useState(0);
    const [checkSearch, setSearch] = useState(true)
    
    const paginationIndex = 0;
    var intialtquery = `https://www.googleapis.com/books/v1/volumes?q=java&projection=lite&key=AIzaSyAam7TX5fc5V0VCHR84AgJ-ZF1hzqtWBZM&maxResults=30&filter=free-ebooks&startIndex=0`;
    var trendingQuery = `https://www.googleapis.com/books/v1/volumes?q=java&projection=lite&key=AIzaSyAam7TX5fc5V0VCHR84AgJ-ZF1hzqtWBZM&maxResults=10&filter=free-ebooks&startIndex=50`;
    

    const search =async ()=> {
        
        var searchQuery = `https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&key=AIzaSyAam7TX5fc5V0VCHR84AgJ-ZF1hzqtWBZM&maxResults=5&filter=free-ebooks`;
        console.log(searchQuery);
        const data=  await axios.get(searchQuery).then((data)=>{
            setData(data.data.items)
        }).catch(e=>console.log(e))
       
       
        setSearch(false);

    }
    const SignOut = ()=>{
        console.log(auth.currentUser);
        signOut(auth).then(()=>{
            navigation.navigate("login")
          
        }).catch(()=>{
          
        })
    
    
      }

    useEffect(async ()=>{
    const data1= await axios.get(intialtquery).then(result => setData(result.data.items)).catch(e=> console.log(e))
    
   
    
    // const data2 = await axios.get(trendingQuery).catch(e=> {})
    // setData(data1.data.items)
    // setTData(data2.data.items)
    // console.log(data);
   
  
      
     
    }, [])

    return (
        <Formik
        initialValues={{ search:""}}
      validateOnMount = {true}
      onSubmit ={values=> search(values.search)}
      validationSchema= {searchSchema}
        >

{({ handleChange, handleBlur, handleSubmit,touched,errors,isValid, values }) => (
    
    
    <KeyboardAvoidingView style = {{ backgroundColor: "#141414", flex: 1}}>
        <ScrollView  contentContainerStyle={{flex: 1,backgroundColor:"black"}}>
        <Button 
        onPress={()=>SignOut()}
        color="#ebb82d"
        mode="contained"
                style={{width: 60}}
                labelStyle={{fontSize: 10}}
                >logout</Button>
            <View style ={{flex: 1, alignItems: "center", paddingTop: 10, backgroundColor: "black"}}>

            <Image style= {{width: 250, height: 60}} source={require("../Images/Logo.png")}></Image>
                <View style={{display:"flex", flexDirection:"row", paddingHorizontal: 20, paddingBottom: 20, }} >
                    <TextInput 
                    style={{flex: 5, height: 40, marginRight: 10, backgroundColor: "black"}}
                    label="What would you like to read" 
                    mode="outlined"  
                    underlineColor="#fc5203" 
                    activeUnderlineColor="#fc5203"  
                    theme={{colors:{text: "white", placeholder: "white"}}}
                    activeOutlineColor= "white"
                    outlineColor= "white"
                    onChangeText={handleChange('search')}
                    onBlur={handleBlur('search')}
                    
                    value={values.search}
                    ></TextInput>

                    <Button  color="#ebb82d" mode="contained" labelStyle={{ color: "white", fontSize: 18 }} style={{textAlign: "center",height:40, marginTop: 10, backgroundColor: isValid?"#ebb82d": "#c9c3b1"}} disabled = {!isValid}  
                    onPress={handleSubmit}
                    > search</Button>
                </View>
                {checkSearch&&<View style= {{flex: 1, alignItems: "center"}}>

                <Slider data= {data} nav ={navigation}/>

                {/* <View style={{height: 200,marginBottom: 10}}>
                    <Text style= {{color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center", fontStyle: "italic"}}> Trending</Text>
                    <ScrollView horizontal= {true} contentContainerStyle={{}}>
                    <Book nav = {navigation} title= "abc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book nav = {navigation} title= "aasdfgc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book nav = {navigation} title= "abasdfgc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book nav = {navigation} title= "abasdrtasxmvisejfvbnc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book nav = {navigation} title= "abajdngiadcinasc" disc = "abc" img={"../Images/book.png"} ></Book>
                    </ScrollView>
                </View> */}
                <Title style={{color: "white", fontStyle:"italic", borderBottomColor: "white",  marginBottom: 15}}>Explore</Title>
                <ScrollView style={{display:"flex"}}>
                    
                    {data.map((item)=>{
                        
                        return (<TouchableOpacity onPress={()=>navigation.navigate("det", {book:item})} >
                            <CardBook nav ={navigation} item={item} key={Math.random()}></CardBook>
                        </TouchableOpacity>)
                    })}
                </ScrollView>
                </View>}

                {!checkSearch && <View style= {{flex: 1, alignItems: "center"}}>
                    <Text style={{color: "white", fontSize: 15, fontWeight: "bold", marginBottom:20, marginTop:20}}>Results</Text>
                    <ScrollView style={{display:"flex"}}>
                    
                    {data.map((item)=>{
                        
                        return (<TouchableOpacity onPress={()=>navigation.navigate("det", {book:item})} >
                            <CardBook nav ={navigation} item={item} key={Math.random()}></CardBook>
                        </TouchableOpacity>)
                    })}
                </ScrollView>

                    </View>}
                

            </View>
        </ScrollView>


    </KeyboardAvoidingView>
)}
    </Formik>
   
    
    )



   
    // return (<View style={{display : "flex", flex: 1}}>
    //     <View style= {style.container}>
    //         <Title style= {style. Maintitle}> Pocket Library</Title>
    //         <View style= {style.searchBar}>
                        
    //             <TextInput 
    //             style= {style.search} 
    //             placeholder= "What would you like to read?" 
    //             placeholderTextColor="#adacaa" 
    //             onChangeText={(text)=>setquery(text)}></TextInput>
    //             <Button style={style.icon} icon="magnify" onPress={()=> search(query)}></Button>

    //         </View>
    //         <Title style= {style. Maintitle}> For You</Title>
          
    //     </View>
    //     <View>
    //     <ScrollView>
    //         {/* <View style = {{flex: 1, backgroundColor : 'orange  '}}>
    //             {data.map((item)=> {
                    
                
    //            return <Book nav = {navigation} title= {item.volumeInfo.title} disc = {item.volumeInfo.authors} item= {item}   ></Book>})}
                
    //         </View> */}

    //     </ScrollView>
    //     </View>
        

        {/* <SafeAreaView >
            <ScrollView style={style.seealsoContainer}>
                <Text>Trending</Text>
                <SwipingCarasoul data= {data}/>
            
                
                <Text style={style.trendingTitle}> See Also</Text>
                <View style={style.trending}>
                    {data.map(item =>{ return <Book title= {item.title} disc = {item.disc}></Book>} )}
                    =
                </View>
            </ScrollView>
        </SafeAreaView> */}
    // </View>
    // )
}

const Home = ({navigation})=> {
    return (
        
      <tab.Navigator 
      screenOptions={{headerShown: false, 
       
        tabBarActiveTintColor: "#ebb82d",
        tabBarStyle: {
            backgroundColor: "black",
            
    }}}
      
      
      >
        <tab.Screen 

        
        name="Home" component={component} />
        <tab.Screen name="Favourites" component={Fav} />
        <tab.Screen nav = {navigation} name="up" component={Update} />
      </tab.Navigator>
    
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        width: width
    },
    container: {
        
        backgroundColor: "#ebb82d",
        width: width,
        height: 260,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
        
    },
    container2: {
        flex: 2,
        backgroundColor: "black",
        width: width
    },
    cContainer:{
        flex: 1,
        backgroundColor: "#ebb82d" 
    },
    searchBar: {
        
        width: width,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 2,
        marginBottom: 10

       

    },
    search: {
        flex: 4,
        borderColor: "#c29827",
        borderRadius: 10,
        borderWidth: 1,
        color:  "white",
        height: 50,
        marginTop: 10,
        marginHorizontal:5,
        backgroundColor: "#c29827"

    
       
    }
    ,
    icon:{
        color: "#ffffff"
    }
    ,
    Maintitle:{
        color : "white",
        textAlign : "center",
        
        fontSize: 30,
        paddingTop : 35,
        paddingBottom: 10
    },
    title: {
        color : "white",
        fontSize: 25
    },
    book: {
        backgroundColor: "black"
    }
    ,
    
    swipElement: {
        backgroundColor: "whites",
        
        width: width,
        height: 220,
        borderRadius: 10,
        

        
        
    }
    , Image: {
        width : width,
        height: 140

    }
    

});

export default module = Home;