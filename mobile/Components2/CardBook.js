import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { Dimensions, Text } from "react-native";

const {width} = Dimensions.get("window")

const BookCard =()=>{

    return(<Card style={{width:350, backgroundColor: "#121212", marginVertical: 3, marginHorizontal: 2, paddingVertical: 10, paddingHorizontal:10 }}>
        <Card.Cover source={require("../Images/book.png")}></Card.Cover>
        <Card.Content>
            
            <Title style= {{color: "white"}}>Title: <Text style= {{fontStyle: "italic", fontSize: 15}}>Welcome Home</Text></Title>
            <Paragraph style= {{color: "white"}}>A book about making home in heart</Paragraph>
        </Card.Content>
    </Card>);

}

export default module = BookCard ;