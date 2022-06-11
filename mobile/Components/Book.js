import React from "react";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native"
import StarRating from "react-native-star-rating-widget"

const Book = (props)=>{
    return(
      
        <Card style={style.book} button  onPress={()=> Alert.alert("aljd","ajskd")}>
       
        
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.disc}</Paragraph>
        <StarRating 
        rating={4}
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
    backgroundColor:"white"

  }
});

export default module = Book;
