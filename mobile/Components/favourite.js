import React, {useState, useEffect} from "react";
import { Button, Card , Paragraph, Title, TextInput } from "react-native-paper";
import {Image,Dimensions,View ,Text, ScrollView, StyleSheet,  Alert,KeyboardAvoidingView, TouchableOpacity} from "react-native"
import CardBook from "../Components2/CardBook";
import axios from "axios";

;
import { Formik } from "formik";
import searchSchema from "../models/SearchSchema";

import AsyncStorage from "@react-native-async-storage/async-storage";


const {width, height} = Dimensions.get("screen");


const component = ({navigation})=>{
    
    const [data, setData] = useState([]);
    const [query, setquery] = useState("");
    const [key, setKey] = useState([])

    useEffect(()=>{
        AsyncStorage.getAllKeys().then(keys=>{
            AsyncStorage.multiGet(keys)
            .then((data)=>{
                setData(data);
                // console.log(data)
                
            })
        })

    }, [])



    
    
    

    const search =async ()=> {
        
        var searchQuery = `https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&key=AIzaSyAam7TX5fc5V0VCHR84AgJ-ZF1hzqtWBZM&maxResults=5&filter=free-ebooks`;

        const data=  await axios.get(searchQuery)
        setData(data.data.items)
        console.log(data.data.items)
        setSearch(false);

    }

   
    // getData();
    

    
    


    return (
        <Formik
        initialValues={{ search:""}}
      validateOnMount = {true}
      onSubmit ={values=> search(values.search)}
      validationSchema= {searchSchema}
        >
            

{({ handleChange, handleBlur, handleSubmit,touched,errors,isValid, values }) => (
    
    
    <KeyboardAvoidingView style = {{ backgroundColor: "#141414", flex: 1}}>
        <ScrollView  contentContainerStyle={{flex: 1}}>
            <View style ={{flex: 1, alignItems: "center", paddingTop: 10, backgroundColor: "black"}}>

               
                <Image style= {{width: 250, height: 60}} source={require("../Images/Logo.png")}></Image>
               <View style= {{flex: 1, alignItems: "center"}}>

                <Title style={{color: "white", fontStyle:"italic", borderBottomColor: "white", borderBottomWidth:1, marginBottom: 15}}>your favourites</Title>
                <ScrollView style={{display:"flex"}}>

                {data.map((res, i, data)=>{
                    
                    
                   
                    return ( <CardBook item={JSON.parse(data[i][1])}></CardBook>)
                })}
                    
                </ScrollView>
                </View>

                
                

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

export default module = component;