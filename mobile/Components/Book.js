import React from "react";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import {Image,View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import StarRating from "react-native-star-rating-widget"

const Book = (props)=>{
    return(
      
        <Card style= {style.book} button  onPress={()=> Alert.alert("aljd","ajskd")}>
       
        
      
      <Card.Content style = {style.content}>
        <Image source={require("../Images/book.png")} ></Image>
        <Title>{props.title}</Title>
        <Paragraph>{props.disc}</Paragraph>
        <StarRating 
        rating={3}
        ></StarRating>
      </Card.Content>
      <Card.Actions>
        
      </Card.Actions>
    </Card>
        
    );
}

const style = StyleSheet.create({
  book:{

    
    marginVertical: 5,
    marginHorizontal: 8,
    backgroundColor:"white",
    height : 180,
    flex: 1

  },
  content: {
    flex: 1,
    flexDirection: "column"
  
  }
});

export default module = Book;
