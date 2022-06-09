import React from "react";
import { Button, Card  } from "react-native-paper";
import {View ,Text, ScrollView, StyleSheet,TextInput,  TouchableOpacity, FlatList} from "react-native"

import Book from "./Book";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ()=>{
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
            id: 3,
            title: "how to win friends and influence papers",
            disc: "abcsbheshbh"
        }
    ]
    return (<View style={style.main}>
        <View style= {style.searchBar}>
            {/* <TextInput style= {style.search}
            label="search"
            placeholder="Search ....." 
            mode="outlined" 
            outlineColor="#ffffff"
            activeOutlineColor="#ffffff"
            theme={{colors:{text: "#ffffff"}}}></TextInput> */}
            <TextInput style= {style.search} placeholder= "Search......." placeholderTextColor="#ffffff"></TextInput>
            <Button style={style.icon} icon="magnify"></Button>

            
        </View>

        <SafeAreaView>
            <ScrollView>
                <Text> Trending Books</Text>
                <View style={style.trending}>
                    <FlatList></FlatList>
                </View>
                <Text> Trending Books</Text>
                <View style={style.trending}>
                    <FlatList 
                    data={data}
                    renderItem = {({item})=>{
                        return <Book title= {item.title} disc = {item.disc}/>
                    }}
                    ></FlatList>
                </View>
            </ScrollView>
        </SafeAreaView>
    </View>
    )
}

const style = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: "black"
    },
    searchBar: {
        height: 80,
        backgroundColor: "#222423",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 10,
       

    },
    search: {
        flex: 3,
        borderColor: "white",
        borderRadius: 100,
        borderWidth: 1,
        color:  "white",
        height: 35,
        marginTop: 10,
        marginHorizontal:5
    
       
    }
    ,
    icon:{
        color: "#ffffff"
    }
    ,
    trending: {
        height: 600,
        backgroundColor: "orange"

    }
});

export default module = Home;