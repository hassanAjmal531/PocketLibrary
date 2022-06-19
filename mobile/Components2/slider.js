import React from "react";
import { View, Text, ScrollView } from "react-native";

import Book from "../Components/Book";


const Slider = ()=>{
    return(
        <View style={{height: 200,marginBottom: 10}}>
                    <Text style= {{color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center", fontStyle: "italic"}}> Trending</Text>
                    <ScrollView horizontal= {true} contentContainerStyle={{}}>
                    <Book  title= "abc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book  title= "aasdfgc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book  title= "abasdfgc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book  title= "abasdrtasxmvisejfvbnc" disc = "abc" img={"../Images/book.png"} ></Book>
                    <Book  title= "abajdngiadcinasc" disc = "abc" img={"../Images/book.png"} ></Book>
                    </ScrollView>
                </View>
    );
}

export default module = Slider;