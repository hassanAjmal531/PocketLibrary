import React from "react";
import { Button, Card , Paragraph, Title } from "react-native-paper";
import {Image,Dimensions,View ,Text, ScrollView, StyleSheet,TextInput,  TouchableOpacity, FlatList} from "react-native"

import Book from "./Book";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipingCarasoul from "./SwipingCarasoul";
import { black } from "react-native-paper/lib/typescript/styles/colors";
import Swiper from "react-native-swiper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
const {width} = Dimensions.get("window");
const Fav = ()=>{
    const data= [
        {
            id: 1,
            title: "welcome Home",
            disc: "abcsbheshbh"
        },
        {
            id: 2,
            title: "the obsticle is the way",
            disc: "abcsbheshbh"
        },
        {
            id: 4,
            title: "how to win friends and influence papers",
            disc: "abcsbheshbh"
        },
        {
            id: 5,
            title: "the obsticle is the way",
            disc: "abcsbheshbh"
        },
        {
            id: 6,
            title: "how to win friends and influence papers",
            disc: "abcsbheshbh"
        }
    ]
    return (<SafeAreaView style={style.main}>
        <View style= {style.container}>
            <Title style= {style. Maintitle}> Pocket Library</Title>
            <View style= {style.searchBar}>
                        
                <TextInput style= {style.search} placeholder= "What would you like to read?" placeholderTextColor="#adacaa"></TextInput>
                <Button style={style.icon} icon="magnify"></Button>

            </View>
            <Title style= {style. Maintitle}> For You</Title>
          
        </View>
        <View>
        <ScrollView>
            <View style = {{flex: 1, backgroundColor : 'orange  '}}>
                {data.map(item=> <Book title= {item.title} disc = {item.disc}></Book>)}
                
            </View>
        </ScrollView>
        </View>
        

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
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "black",
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

export default module = Fav;