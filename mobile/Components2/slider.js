import React from "react";
import { View, Text, ScrollView } from "react-native";

import Book from "../Components/Book";


const Slider = (props)=>{
    return(
        <View style={{height: 180,marginBottom: 10}}>
                    <Text style= {{color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center", fontStyle: "italic"}}> Trending</Text>
                    <ScrollView horizontal= {true} contentContainerStyle={{}}>
                   
                    {props.data.map(item=>{
                        return ( <Book  title= "abc" disc = "abc" item={item} nav= {props.nav}></Book>)
                    })}
                    </ScrollView>
                </View>
    );
}

export default module = Slider;